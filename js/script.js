function initVue(){

    new Vue ({

        el: '#app',
        data: {

            posters: [],
            genres: [],
        },

        methods: {

            printGenre: function(){

                const select = document.getElementById('select-genre');
                const val = select.value
                console.log(val);
            }
        },

        mounted(){

            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(data => {

                data.data.response.forEach(item => {
                    this.posters.push(item.poster);

                    if (!this.genres.includes(item.genre)){

                        this.genres.push(item.genre)
                    }
                })
            })

            const select = document.getElementById('select-genre');
            const val = select.value
            console.log(select, val);

        }

    })
}

document.addEventListener('DOMContentLoaded', initVue)
