//Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path'); // Agrega esto al inicio
//Routes
const employees = require('./Routes/employees.js');
const users = require('./Routes/users.js');
const asistencias = require('./Routes/asistencias.js');
const nominas = require('./Routes/nominas.js');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notfound');
const index = require('./middleware/index.js');
const cors = require('./middleware/cors');

// Middleware globales
app.use(cors);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.redirect('/login.html');
});

// RUTA PÚBLICA (antes de usar auth)
app.use('/users/login', users);

// Middleware de autenticación para todo lo demás
app.use(auth);

// RUTAS PROTEGIDAS
app.use("/users", users); // /users/register, etc.
app.use("/employees", employees);
app.use('/asistencias', require('./Routes/asistencias'));
app.use("/nominas", nominas);

// Servir archivos estáticos de la carpeta Panel
app.use(express.static(path.join(__dirname, 'Panel')));

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});
