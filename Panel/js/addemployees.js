function addemployees() {
    const employee = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        telefono: document.getElementById("telefono").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value
    };

    axios.post("http://localhost:3000/employees", employee)
        .then(response => alert(response.data.message))
        .catch(error => console.error(error));
}
