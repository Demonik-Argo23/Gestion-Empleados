// deleteemployees.js
window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-danger').addEventListener('click', deleteemployees);
    } else {
        window.location.href = "index.html";
    }
}

function deleteemployees() {
    // Obtén el ID del empleado que se desea eliminar
    const employeeId = document.getElementById("input-id").value;
    // Realiza la solicitud DELETE para eliminar al empleado
    axios({
        method: 'delete',
        url: `http://localhost:3000/employees/${employeeId}`,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(function(res) {
        if (res.data.code === 200) {
            alert("Empleado eliminado correctamente");
            // Opcional: Limpia el campo de entrada del ID después de eliminar
            document.getElementById("input-id").value = '';
        } else {
            alert("No se encontró el empleado o ocurrió un error");
        }
    })
    .catch(function(err) {
        console.error("Error en la solicitud: ", err);
    });
}

