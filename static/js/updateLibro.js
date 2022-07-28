var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
}

var esp = /%20/gi;
/* var ñ = /%C3%B1/gi;
var ac = /%C3%A1/gi;
var ic = /%C3%AD/gi; */

document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtTitulo").value = parts[1][1].replace(esp, " ");
document.getElementById("txtAutor").value = parts[2][1].replace(esp, " ")
document.getElementById("txtDescripcion").value = parts[3][1].replace(esp, " ");
document.getElementById("txtImagen").value = parts[4][1]
document.getElementById("txtStock").value = parts[5][1]
document.getElementById("txtPrecio").value = parts[6][1]
document.getElementById("txtDestacado").value = parts[7][1]

function modificar() {
    let i = document.getElementById("txtId").value
    let t = document.getElementById("txtTitulo").value
    let a = document.getElementById("txtAutor").value
    let d = document.getElementById("txtDescripcion").value
    let im = document.getElementById("txtImagen").value
    let s = parseInt(document.getElementById("txtStock").value)
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let des = parseInt(document.getElementById("txtDestacado").value)

    let libro = {
        id: i,
        titulo: t,
        autor: a,
        descripcion: d,
        imagen: im,
        stock: s,
        precio: p,
        destacado: des
    }

    let url = "https://libreria-demo-heroku.herokuapp.com/libros/"

    var options = {
        body: JSON.stringify(libro),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }

    fetch(url, options)
        .then(function() {
            console.log("modificado")
            alert("Registro modificado")
        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })

}