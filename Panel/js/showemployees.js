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
        loadEmployees();
    } else {
        window.location.href = "login.html";
    }
}

function loadEmployees() {
    axios.get(url + "employees", headers)
    .then(function(res) {
        console.log("Respuesta de la API:", res);

        if (Array.isArray(res.data.message)) {
            displayEmployees(res.data.message); 
        } else {
            console.log("No se recibieron empleados. Respuesta inesperada:", res.data);
        }
    })
    .catch(function(err) {
        console.log("Error al cargar empleados:", err);
    });
}

function displayEmployees(employees) {
    var employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = ''; 
    // Si no hay empleados, mostrar un mensaje
    if (employees.length === 0) {
        employeeList.innerHTML = "<p>No hay empleados registrados.</p>";
        return;
    }

    employees.forEach(employee => {
        var employeeCard = document.createElement("div");
        employeeCard.classList.add("card", "mb-3");

        // Llenar los detalles de cada empleado
        employeeCard.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${employee.nombre} ${employee.apellidos}</h5>
                <p class="card-text"><strong>Teléfono:</strong> ${employee.telefono}</p>
                <p class="card-text"><strong>Correo:</strong> ${employee.correo}</p>
                <p class="card-text"><strong>Dirección:</strong> ${employee.direccion}</p>
            </div>
        `;

        employeeList.appendChild(employeeCard);
    });
}
