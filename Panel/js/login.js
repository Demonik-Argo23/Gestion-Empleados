window.onload = init;

function init() {
    // Siempre agrega el event listener al botón "Entrar"
    document.querySelector('.btn-primary').addEventListener('click', login);
}

function login() {
    var name = document.getElementById('input-username').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/users/login',
        data: {
            username: name,
            password: pass
        }
    }).then(function (res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            window.location.href = "admin.html";
        } else {
            alert(res.data.message || "Usuario y/o contraseña incorrectos");
        }
    }).catch(function (err) {
        alert(err.response?.data?.message || "Error de autenticación");
        console.log(err);
    });
}
