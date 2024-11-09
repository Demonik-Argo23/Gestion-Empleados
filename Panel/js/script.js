let token = localStorage.getItem('jwtToken');  // Guarda el token en el almacenamiento local

//este token y esta pieza de codigo se debe activar despues de iniciar sesion al obtener el tokem

// Carga inicial de empleados al abrir la página
//window.onload = () => {
//    if (!token) {
//        alert("No has iniciado sesión");
//        window.location.href = "index.html";
//    } else {
//        fetchEmployees();
//    }
//};

// Función para obtener y mostrar empleados
function fetchEmployees() {
    fetch('/api/employees', {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => response.json())
    .then(data => {
        const employeeList = document.getElementById('employeeList');
        employeeList.innerHTML = '';
        data.forEach(employee => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p><strong>Nombre:</strong> ${employee.nombre}</p>
                <p><strong>Apellidos:</strong> ${employee.apellidos}</p>
                <p><strong>Teléfono:</strong> ${employee.telefono}</p>
                <p><strong>Correo:</strong> ${employee.correo}</p>
                <p><strong>Dirección:</strong> ${employee.direccion}</p>
                <button onclick="deleteEmployee(${employee.id})">Eliminar</button>
            `;
            employeeList.appendChild(div);
        });
    });
}

// Función para agregar un nuevo empleado
function addEmployee() {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;

    fetch('/api/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nombre, apellidos, telefono, correo, direccion })
    })
    .then(response => response.json())
    .then(data => {
        alert('Empleado agregado exitosamente');
        fetchEmployees();
    });
}

// Función para eliminar un empleado
function deleteEmployee(id) {
    fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    })
    .then(response => response.json())
    .then(data => {
        alert('Empleado eliminado');
        fetchEmployees();
    });
}
