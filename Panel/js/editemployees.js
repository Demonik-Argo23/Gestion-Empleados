// editemployees.js
window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-primary').addEventListener('click', editemployees);
    } else {
        window.location.href = "index.html";
    }
}

function editemployees() {
    // Obtén el ID del empleado que se desea editar
    const employeeId = document.getElementById("input-id").value;

    // Obtiene los datos del formulario para editar el empleado
    const updatedEmployee = {
        nombre: document.getElementById("input-nombre").value,
        apellidos: document.getElementById("input-apellidos").value,
        telefono: document.getElementById("input-telefono").value,
        correo: document.getElementById("input-correo").value,
        direccion: document.getElementById("input-direccion").value
    };

    // Realiza la solicitud PUT para actualizar la información del empleado
    axios({
        method: 'put',
        url: `http://localhost:3000/employees/${employeeId}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: updatedEmployee
    })
    .then(function(res) {
        if (res.data.code === 200) {
            alert("Empleado actualizado correctamente");
        } else {
            alert("Ocurrió un error al actualizar el empleado");
        }
    })
    .catch(function(err) {
        console.error("Error en la solicitud: ", err);
    });
}
