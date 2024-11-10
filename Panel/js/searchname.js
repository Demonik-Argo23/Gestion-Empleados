window.onload = init;

var headers = {};
var url = "http://localhost:3000/";

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        };
        document.querySelector('#search-button').addEventListener('click', searchEmployee);
    } else {
        window.location.href = "login.html";
    }
}

function searchEmployee() {
    var nombre = document.getElementById("input-nombre").value.trim();

    if (nombre) {
        loadEmployees(nombre);
    } else {
        alert("Por favor, ingresa un nombre para buscar.");
    }
}

function loadEmployees(nombre) {
    axios.get(url + "employees/" + nombre, headers)
        .then(function(res) {
            console.log("Respuesta de la API:", res.data);  // Verifica los datos recibidos
            displayEmployee(res.data);  // Muestra los datos del empleado
        })
        .catch(function(err) {
            console.log("Error:", err);
            document.getElementById("employee-details").innerHTML = "<p>No se encontró ningún empleado con ese nombre.</p>";
        });
}

function displayEmployee(employee) {
    var employeeDetails = document.getElementById("employee-details");
    employeeDetails.innerHTML = '';  // Limpiar cualquier contenido previo

    if (Array.isArray(employee)) {
        employee = employee[0];  // Si es un arreglo, usa el primer empleado
    }

    if (employee) {
        var employeeCard = document.createElement("div");
        employeeCard.classList.add("card", "mb-3");

        employeeCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${employee.nombre} ${employee.apellidos}</h5>
                <p class="card-text"><strong>Teléfono:</strong> ${employee.telefono}</p>
                <p class="card-text"><strong>Correo:</strong> ${employee.correo}</p>
                <p class="card-text"><strong>Dirección:</strong> ${employee.direccion}</p>
            </div>
        `;
        employeeDetails.appendChild(employeeCard);
    } else {
        employeeDetails.innerHTML = "<p>No se encontró ningún empleado con ese nombre.</p>";
    }
}
