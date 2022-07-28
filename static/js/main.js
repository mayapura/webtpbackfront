if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data() {
            return {
                usuarios: [],
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "https://libreria-demo-heroku.herokuapp.com/usuarios"
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.usuarios = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(usuario) {
                const url = 'https://libreria-demo-heroku.herokuapp.com/usuarios/' + usuario;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })
}