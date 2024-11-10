function editEmployee() {
    const employeeId = document.getElementById("id").value;
    const updatedEmployee = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value
    };

    axios.put(`http://localhost:3000/employees/${employeeId}`, updatedEmployee)
        .then(response => alert(response.data.message))
        .catch(error => console.error(error));
}
