const { createApp } = Vue;
createApp({

    data() {
        return {
            albumsData: [],
            author: ''
        }
    },

    created() {
        this.apiCall();
    },

    methods: {
        apiCall() {
            axios
                .get('http://localhost/php-dischi-json/backend/api.php', {
                    params: {
                        author: this.author
                    }
                })
                .then((res) => {
                    this.albumsData = res.data;
                })
                .catch((error) => {
                    console.error("Errore durante il caricamento dei dati:", error);
                });
        },

        myLog() {
            console.log(this.albumsData);
        }
    }

}).mount('#app');
