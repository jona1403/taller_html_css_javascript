function imprimir() {
    const data = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        correo: document.getElementById("correo").value,
        fecha_nac: document.getElementById("fecha-nac").value,
        contrasenia: document.getElementById("contrasenia").value,
        confirmacion: document.getElementById("confirmacion").value
    }
    console.log(JSON.stringify(data))


    //Esta linea de codigo envia un mensaje de si ambas contraseñas son iguales o son distintas
    data.contrasenia != data.confirmacion ? alert("Por favor ingrese la contraseña correcta") : alert("Contraseña correcta")

    //Con esta linea de abajo te podes redireccionar desde tu js a alguna otra pagina
    //window.location.href = "https://www.google.com"
}