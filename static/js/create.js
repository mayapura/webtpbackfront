function enviarmje() {

    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let d = parseInt(document.getElementById("txtDni").value)
    let e = document.getElementById("txtEmail").value
    let p = parseInt(document.getElementById("txtTelefono").value)
    let as = document.getElementById("txtAsunto").value
    let m = document.getElementById("txtMensaje").value

    let usuario = {
        nombre: n,
        apellido: a,
        dni: d,
        email: e,
        telefono: p,
        asunto: as,
        mensaje: m
    }

    let url = "https://libreria-demo-heroku.herokuapp.com/usuarios"

    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // redirect: 'follow'
    }
    fetch(url, options)
        .then(function() {
            console.log("enviado")
            alert("Mensaje enviado")

            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al enviar el mensaje")
            console.error(err);
        })
}