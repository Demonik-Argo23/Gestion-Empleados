const express = require('express');
const employees= express.Router();
const  db  = require('../config/database');


employees.post("/", async (req,res,next) => {
    const { nombre, apellidos, telefono, correo, direccion } = req.body;

    if(nombre && apellidos && telefono && correo && direccion) {
        let query = "INSERT INTO employees (nombre, apellidos, telefono, correo, direccion)";
        query += ` VALUES('${nombre}', '${apellidos}', '${telefono}', '${correo}', '${direccion}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1) {
            return res.status(201).json({code: 201 , message: "Empleado insertado correctamente"});
        }
        return res.status(500).json({code: 500 , message: "Ocurrio un error"});
    }
     return res.status(500).json({code: 500 , message: "Campos Incompletos"});
});

employees.delete("/:id([0-9]{1,3})", async (req,res,next) => {
    const query = `DELETE FROM employees WHERE id=${req.params.id}`;
    const rows = await db.query(query)

    if (rows.affectedRows == 1) {
        return res.status(200).json({code: 200 , message: "Empleado borrado correctamente" });
    }
    return res.status(404).json({code: 404 , message: "Empleado no encontrado" });
})
employees.put("/:id([0-9]{1,3})", async(req, res, next) => {
    const { nombre, apellidos, telefono, correo, direccion } = req.body;

    if(nombre && apellidos && telefono && correo && direccion) {
        let query = `UPDATE employees SET nombre='${nombre}', apellidos='${apellidos}', `;
        query += `telefono='${telefono}', correo='${correo}', direccion='${direccion}' WHERE id=${req.params.id};`;
        
        const rows = await db.query(query);

        if(rows.affectedRows == 1) {
            return res.status(200).json({code: 200 , message: "Empleado actualizado correctamente"});
        }
        return res.status(500).json({code: 500 , message: "Ocurrio un error"});
    }
     return res.status(500).json({code: 500 , message: "Campos Incompletos"});
});
employees.patch("/:id([0-9]{1,3})", async (req, res, next) => {
    if (req.body.nombre) {
        let query = `UPDATE employees SET nombre='${req.body.nombre}' WHERE id=${req.params.id}`;
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(200).json({ code: 200, message: "Empleado actualizado correctamente" });
        }

        return res.status(500).json({ code: 500, message: "Ocurrió un error" });
    }
    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});

employees.get('/', async (req,res,next) => {
    const gstn = await db.query("SELECT * FROM employees");
    return res.status(200).json({code: 1 , message: gstn});
});

employees.get('/:id([0-9]{1,3})', async (req,res,next) => {
    const id = req.params.id;
    if (id >= 0 && id <= 722){
        const gstn = await db.query("SELECT * FROM employees WHERE id="+id);
        return res.status(200).json({ code: 1, message: gstn});
    }
    else {
        return res.status(404).send({code: 404, message: "Empleado no encontrado" });
    }
});

employees.get('/:name([A-Za-z]+)', async (req, res, next) => {
    const nombre = req.params.name;
    const gstn = await db.query("SELECT * FROM employees WHERE nombre = ?", [nombre]);
    
    console.log(nombre);
    if (gstn.length > 0) {
        return res.status(200).json(gstn);
    }
    return res.status(404).send("Empleado no encontrado");
});


module.exports = employees;
