<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/">Home</router-link>
        </nav>
        <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-4" v-for="(movie, i) in $store.state.movies" :key="movie.id">
            <div class="card" @click.prevent="selectMovie(i)">
                <div class="card-horizontal">
                    <div class="img-square-wrapper" :style="'background-image:url(' + movie.poster + ')'"></div>
                    <div class="card-body">
                        <h4 class="card-title">{{movie.title}}</h4>
                        <hr>
                        <div class="align-left">
                            <h5>Release year: {{movie.year}}</h5>
                            <h5>Movie type: {{movie.type}}</h5>
                            <h5>More info : <a :href="'https://www.imdb.com/title/' +movie.imdbID">IMDB</a></h5>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Release year {{movie.year}}</small>
                </div>
            </div>
        </div>
    </div>
</div>
        
    </div>
</template>

<script>
export default {
    name: "Movie",
    methods: {
        selectMovie(i) {
            this.$store.commit('selectMovie', i);
            this.$router.push('/rate')   
        }
    },
    created() {
        this.$store.dispatch("getMovies");
    }
}
</script>

<style lang="scss">
nav {
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
}
.card {
    position: relative;
    width: 90%;
    height: 300px;
    left: 50%;
    transform: translateX(-50%);
    margin: 20px 0px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
}
.img-square-wrapper {
    position: relative;
    width: 30%;
}
.card-body {
    position: relative;
    width: 70%;
}
.card-horizontal {
    display: flex;
    flex: 1 1 auto;
}
.align-left {
    text-align: left;
    h5 {
        padding: 5px 0px;
    }
}
</style>