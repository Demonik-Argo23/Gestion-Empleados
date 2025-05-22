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
    var id = document.getElementById("input-id").value.trim();
    var puesto = document.getElementById("input-puesto").value.trim();

    // Si no hay ningún filtro, no buscar
    if (!nombre && !id && !puesto) {
        alert("Por favor, ingresa al menos un filtro para buscar.");
        return;
    }

    // Construir query params
    let params = [];
    if (id) params.push(`id=${encodeURIComponent(id)}`);
    if (nombre) params.push(`nombre=${encodeURIComponent(nombre)}`);
    if (puesto) params.push(`puesto=${encodeURIComponent(puesto)}`);
    let query = params.length ? '?' + params.join('&') : '';

    axios.get(url + "employees/search" + query, headers)
        .then(function (res) {
            let employees = res.data.message || [];
            displayEmployees(employees);
        })
        .catch(function (err) {
            document.getElementById("employee-details").innerHTML = "<p>No se encontró ningún empleado con esos filtros.</p>";
        });
}

function displayEmployees(employees) {
    var employeeDetails = document.getElementById("employee-details");
    employeeDetails.innerHTML = '';

    if (!employees || employees.length === 0) {
        employeeDetails.innerHTML = "<p>No se encontró ningún empleado.</p>";
        return;
    }

    employees.forEach(employee => {
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
        employeeDetails.appendChild(employeeCard);
    });
}

// Función global para cambiar la "página" de la card
window.cambiarPaginaEmpleado = function(pageId, pagina) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`${pageId}-${i}`).style.display = (i === pagina) ? 'block' : 'none';
    }
};

