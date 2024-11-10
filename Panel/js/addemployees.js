// addemployees.js
window.onload = init;

function init() {
    if (localStorage.getItem("token")) {
        document.querySelector('.btn-primary').addEventListener('click', addemployees);
    } else {
        window.location.href = "index.html";
    }
}
function addemployees() {
    // Obtiene los datos del formulario
    const newEmployee = {
        nombre: document.getElementById("input-nombre").value,
        apellidos: document.getElementById("input-apellidos").value,
        telefono: document.getElementById("input-telefono").value,
        correo: document.getElementById("input-correo").value,
        direccion: document.getElementById("input-direccion").value
    };
  
    // Realiza la solicitud POST para agregar el nuevo empleado
    axios({
        method: 'post',
        url: 'http://localhost:3000/employees',
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        data: newEmployee
    })
    .then(function(res) {
        if (res.data.code === 201) {
            alert("Empleado agregado correctamente");
        } else {
            alert("Ocurrió un error al agregar el empleado");
        }
    })
    .catch(function(err) {
        console.error("Error en la solicitud: ", err);
    });
}
