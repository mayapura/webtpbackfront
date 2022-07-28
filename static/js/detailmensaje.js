var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
}

console.log(parts)
let idUser = parts[0][1];


if (document.getElementById("apli")) {
    const app = new Vue({
        el: "#apli",
        data() {
            return {
                usuario: {},
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "https://libreria-demo-heroku.herokuapp.com/usuarios/" + idUser;
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        this.usuario = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true;
                    })
            },
        }
    })
}