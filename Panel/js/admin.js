// admin.js

window.onload = init;

var headers = {};
var url = "http://localhost:3000/";

function init() {
    // Verifica si el usuario tiene un token válido
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem("token")
            }
        };

        // Cargar empleados al iniciar
        loadEmployees();

        // Event listeners para botones
        document.querySelector('.btn-primary[data-action="add"]').addEventListener('click', () => {
            window.location.href = "addemployees.html";
        });
        document.querySelector('.btn-primary[data-action="edit"]').addEventListener('click', () => {
            window.location.href = "editemployees.html";
        });
        document.querySelector('.btn-danger[data-action="delete"]').addEventListener('click', () => {
            window.location.href = "deleteemployees.html";
        });
        document.querySelector('.btn-secondary[data-action="logout"]').addEventListener('click', logout);
    } else {
        // Redirecciona a la página de inicio de sesión si no hay token
        window.location.href = "index.html";
    }
}
function logout() {
    // Elimina el token de localStorage y redirige a la página de inicio de sesión
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
