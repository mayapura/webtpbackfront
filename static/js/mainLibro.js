if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data() {
            return {
                libros: [],
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "https://libreria-demo-heroku.herokuapp.com/libros"
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.libros = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(libro) {
                const url = 'https://libreria-demo-heroku.herokuapp.com/libros/' +
                    libro;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text())
                    .then(res => {
                        location.reload();
                    })
            }
        }
    })

}