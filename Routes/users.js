const express = require('express');
const jwt = require('jsonwebtoken')
const users = express.Router();
const db = require('../config/database');

users.post("/register", async (req, res, next) => {
    const { username, password, role } = req.body;

    if (username && password && role) {
        let query = "INSERT INTO users (username, password, role) ";
        query += `VALUES ('${username}', '${password}', '${role}');`;
        const rows = await db.query(query);

        if (rows.affectedRows == 1) {
            return res.status(201).json({ code: 201, message: "Usuario registrado correctamente" });
        }
        return res.status(500).json({ code: 500, message: "Ocurrió un error" });
    }

    return res.status(500).json({ code: 500, message: "Campos incompletos" });
});


users.post("/login", async(req,res,next) => {
    const { username, password }=req.body;
    const query=`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`
    const rows = await db.query(query);

    if (username && password) {
        if (rows.length == 1) {
            const token = jwt.sign({
                name: rows[0].name,
                password: rows[0].password
            }, "debugkey");
            return res.status(200).json({code: 200 , message: token })
        }
        else {
            return res.status(401).json({code: 401, message: "Contraseña o usuario incorrectos"})
        }
    }
    return res.status(500).json({code: 500, message: "Campos Incompletos" });
    
});

users.get("/", async (req, res, next) => {
    const query = "SELECT * FROM users";
    const rows = await db.query(query);

    return res.status(200).json({code: 200, message: rows})
});

module.exports = users;