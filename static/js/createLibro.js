function guardar() {
    let t = document.getElementById("txtTitulo").value
    let a = document.getElementById("txtAutor").value
    let d = document.getElementById("txtDescripcion").value
    let im = document.getElementById("txtImagen").value
    let s = parseInt(document.getElementById("txtStock").value)
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let des = parseInt(document.getElementById("txtDestacado").value)

    let libro = {
        titulo: t,
        autor: a,
        descripcion: d,
        imagen: im,
        stock: s,
        precio: p,
        destacado: des
    }
    let url = "https://libreria-demo-heroku.herokuapp.com/libros"
    var options = {
        body: JSON.stringify(libro),
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
    }
    fetch(url, options)
        .then(function() {
            console.log("creado")
            alert("Grabado")
        })
        .catch(err => {
            alert("Error al grabar")
            console.error(err);
        })

}