window.onload = init;

function init() {
    if(localStorage.getItem("token")){
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        window.location.href = "signin.html";
    });

    document.querySelector('.btn-primary').addEventListener('click', login);
    }
    else {
        window.location.href ="index.html";
    }
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
    }).then(function(res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message);
            window.location.href = "admin.html";
        } else {
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err) {
        console.log(err);
    });
}
