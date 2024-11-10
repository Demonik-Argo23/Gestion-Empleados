//Dependencies
const express = require('express');
const app = express();
const morgan = require('morgan');
//Routes
const employees = require('./Routes/employees.js');
const users = require('./Routes/users.js');
//Middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index.js');
const cors = require('./middleware/cors');
//ya
app.use(cors);
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", index);

app.use("/users", users);

app.use(auth);

app.use("/employees", employees); 

app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});
