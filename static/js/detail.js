var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
}

console.log(parts)
let idBook = parts[0][1];


if (document.getElementById("apli")) {
    const app = new Vue({
        el: "#apli",
        data() {
            return {
                libro: {},
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "https://libreria-demo-heroku.herokuapp.com/libros/" + idBook;
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        this.libro = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true;
                    })
            },
        }
    })
}



/* 
var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
}

console.log(parts)
let idBook = parts[0][1];

console.log(idBook)
const getDatos = (idBook) => {
    console.log(idBook);
    // hacemos la solicitud a la API...
    fetch(`http://localhost:8080/libros/${idBook}`)
        // la API responde en formato JSON
        .then(res => {
            return res.json()
        })
        // Pedimos el userID de ese posteo
        .then(post => {
            console.log(post.id)
            fetch(`http://localhost:8080/libros/${post.id}`)
                .then(res => {
                    return res.json()
                })
                .then(libro => {
                    console.log(libro.autor)
                })
        })
}
getDatos(idBook)

 */