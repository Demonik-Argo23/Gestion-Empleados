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
        .then(function (res) {
            console.log("Respuesta de la API:", res);

            if (Array.isArray(res.data.message)) {
                displayEmployees(res.data.message);
            } else {
                console.log("No se recibieron empleados. Respuesta inesperada:", res.data);
            }
        })
        .catch(function (err) {
            console.log("Error al cargar empleados:", err);
        });
}

function displayEmployees(employees) {
    var employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = '';
    if (employees.length === 0) {
        employeeList.innerHTML = "<p>No hay empleados registrados.</p>";
        return;
    }

    employees.forEach(employee => {
        const cardId = `card-${employee.id}`;
        const pageId = `page-${employee.id}`;
        var employeeCard = document.createElement("div");
        employeeCard.classList.add("card", "mb-3");
        employeeCard.innerHTML = `
            <div class="card-body">
                <div id="${pageId}-1">
                    <h5 class="card-title mb-1">${employee.nombre} ${employee.apellidos}</h5>
                    <p class="mb-1"><strong>ID:</strong> ${employee.id}</p>
                    <p class="mb-1"><strong>Puesto:</strong> ${employee.puesto}</p>
                    <p class="mb-1"><strong>Teléfono:</strong> ${employee.telefono}</p>
                </div>
                <div id="${pageId}-2" style="display:none;">
                    <p class="mb-1"><strong>Dirección:</strong> ${employee.direccion}</p>
                    <p class="mb-1"><strong>CURP:</strong> ${employee.curp}</p>
                    <p class="mb-1"><strong>RFC:</strong> ${employee.rfc}</p>
                    <p class="mb-1"><strong>Correo:</strong> ${employee.correo}</p>
                    <p class="mb-1"><strong>Fecha de nacimiento:</strong> ${(employee.fecha_nacimiento || '').split('T')[0]}</p>
                </div>
                <div id="${pageId}-3" style="display:none;">
                    <p class="mb-1"><strong>Horario:</strong> ${employee.horario}</p>
                    <p class="mb-1"><strong>Sueldo:</strong> $${employee.sueldo} MXN</p>
                    <p class="mb-1"><strong>Antigüedad:</strong> ${employee.antiguedad} año${employee.antiguedad == 1 ? '' : 's'}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <div>
                        <button class="btn btn-sm btn-secondary" onclick="cambiarPaginaEmpleado('${pageId}', 1)">1</button>
                        <button class="btn btn-sm btn-secondary" onclick="cambiarPaginaEmpleado('${pageId}', 2)">2</button>
                        <button class="btn btn-sm btn-secondary" onclick="cambiarPaginaEmpleado('${pageId}', 3)">3</button>
                    </div>
                    <button class="btn btn-outline-info ml-3" onclick="generarPDFEmpleado('${employee.id}')">Ver PDF</button>
                </div>
            </div>
        `;
        employeeList.appendChild(employeeCard);
    });
}

// Agrega esta función global para cambiar la "página" de la card
window.cambiarPaginaEmpleado = function(pageId, pagina) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`${pageId}-${i}`).style.display = (i === pagina) ? 'block' : 'none';
    }
};

