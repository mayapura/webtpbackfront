var objpubli = new Vue({
    el: "#publi",
    data: {
        publis: [
            { publicidad: "https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/01dicker_818_378.jpg", nombre: "dicker" },
            { publicidad: "	https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/03aniquilaci_n_818_378.jpeg", nombre: "aniquilacion" },
            { publicidad: "https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/01fieras_818_378.jpg", nombre: "fieras" },
            { publicidad: "https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/04spiderwick_818_378.jpg", nombre: "spiderwick" },
            { publicidad: "https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/02claroscuro_818_378.jpg", nombre: "claroscuro" },
            { publicidad: "https://www.tematika.com/media/resized/media/wysiwyg/Banners_Home/05adragones_818_378.jpeg", nombre: "dragones" }

        ]
    }
})



/* var args = location.search.substr(1).split('&');
console.log(args)

var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
    console.log(parts[i])
} 

console.log(parts)
let d = parts[0][1];*/

/* if (document.getElementById("desta")) {
    const desta = new Vue({
        el: "#desta",
        data() {
            return {
                librosd: [],
                errored: false,
                loading: true,
            }
        },
        created() {
            var url = "http://localhost:8080/libros/query?destacado=1";
            this.fetchData(url);
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        this.librosd = data;
                        console.log(this.librosd);
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true;
                    })
            },
        }
    })
} */