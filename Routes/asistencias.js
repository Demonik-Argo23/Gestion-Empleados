const express = require('express');
const asistencias = express.Router();
const db = require('../config/database');

// Registrar asistencia para todos los empleados (presente = 1)
asistencias.post('/registrar-todos', async (req, res) => {
    const empleados = await db.query("SELECT id FROM employees");
    const fecha = new Date().toISOString().split('T')[0];

    try {
        for (const emp of empleados) {
            // Evita duplicados para el mismo día
            const existe = await db.query("SELECT * FROM asistencias WHERE empleado_id = ? AND fecha = ?", [emp.id, fecha]);
            if (existe.length === 0) {
                await db.query("INSERT INTO asistencias (empleado_id, fecha, presente) VALUES (?, ?, 1)", [emp.id, fecha]);
            }
        }
        return res.status(201).json({ code: 201, message: "Asistencia registrada para todos" });
    } catch (err) {
        return res.status(500).json({ code: 500, message: "Error al registrar asistencias" });
    }
});

// Quitar asistencia individual (marca presente = 0)
asistencias.post('/quitar/:empleado_id', async (req, res) => {
    const { empleado_id } = req.params;
    const fecha = new Date().toISOString().split('T')[0];

    try {
        // Actualiza si existe, si no, inserta como ausente
        const existe = await db.query("SELECT * FROM asistencias WHERE empleado_id = ? AND fecha = ?", [empleado_id, fecha]);
        if (existe.length > 0) {
            await db.query("UPDATE asistencias SET presente = 0 WHERE empleado_id = ? AND fecha = ?", [empleado_id, fecha]);
        } else {
            await db.query("INSERT INTO asistencias (empleado_id, fecha, presente) VALUES (?, ?, 0)", [empleado_id, fecha]);
        }
        return res.status(200).json({ code: 200, message: "Asistencia quitada" });
    } catch (err) {
        return res.status(500).json({ code: 500, message: "Error al quitar asistencia" });
    }
});

// Obtener asistencias de un empleado por mes y año
asistencias.get('/:empleado_id', async (req, res) => {
    const { empleado_id } = req.params;
    const { mes, anio } = req.query;
    try {
        const rows = await db.query(
            "SELECT * FROM asistencias WHERE empleado_id = ? AND MONTH(fecha) = ? AND YEAR(fecha) = ?",
            [empleado_id, mes, anio]
        );
        return res.status(200).json({ code: 200, message: rows });
    } catch (err) {
        return res.status(500).json({ code: 500, message: "Error al obtener asistencias" });
    }
});

// Registrar asistencia individual (presente = 1)
asistencias.post('/registrar-individual/:empleado_id', async (req, res) => {
    const { empleado_id } = req.params;
    const fecha = new Date().toISOString().split('T')[0];

    try {
        const existe = await db.query("SELECT * FROM asistencias WHERE empleado_id = ? AND fecha = ?", [empleado_id, fecha]);
        if (existe.length === 0) {
            await db.query("INSERT INTO asistencias (empleado_id, fecha, presente) VALUES (?, ?, 1)", [empleado_id, fecha]);
            return res.status(201).json({ code: 201, message: "Asistencia registrada para el empleado" });
        } else if (existe[0].presente === 0) {
            await db.query("UPDATE asistencias SET presente = 1 WHERE empleado_id = ? AND fecha = ?", [empleado_id, fecha]);
            return res.status(200).json({ code: 200, message: "Asistencia actualizada a presente para el empleado" });
        } else {
            return res.status(409).json({ code: 409, message: "Ya existe asistencia para hoy" });
        }
    } catch (err) {
        return res.status(500).json({ code: 500, message: "Error al registrar asistencia individual" });
    }
});

module.exports = asistencias;