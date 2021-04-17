function initVue(){

    new Vue ({

        el: '#app',

        data: {

            albums: [],
            genres: [],

            select: 'All'
        },

        methods: {
            
            getGenres: function(array){      

                array.forEach(item => {

                    this.albums.push(item);

                    if (!this.genres.includes(item.genre)){

                        this.genres.push(item.genre);
                    }
                })
            },

            selectGenres: function(array){

                const tagSelect = document.getElementById('select-genre');

                tagSelect.addEventListener('change', ()=>{

                    if (tagSelect.value == 'All'){

                        this.albums = [...array];
                    } else {
                        
                        this.albums = array.filter(item => item.genre == tagSelect.value);
                    }
                    
                })         
            }

        },
        
        mounted(){
            
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(data => {

                data.data.response.sort(function (a, b) {
                    return a.year - b.year;
                });
                
                this.getGenres(data.data.response);
                this.selectGenres(data.data.response);
            });

        },

    })
}

document.addEventListener('DOMContentLoaded', initVue)


