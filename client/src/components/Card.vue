<template>
<div class="container col-md-12 mt-2 row">
  <div :key="movie.id" v-for="movie in movies" class="card ml-2" style="width: 18rem;">
      <img class="card-img-top" :src="movie.poster" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        <p class="card-text">Year: {{movie.year}}</p>
        <p class="card-text">Type: {{movie.type}}</p>
        <button-custom v-if="withBtn" @click="setMovie(movie)" text="Movie Detail"></button-custom>
      </div>
    </div>
</div>
</template>

<script>
import Button from '../components/Button';
export default {
    props: ["movies", "withBtn"],
    components: {
        'button-custom': Button
    },
    methods: {
      setMovie(movie){
        this.$router.push({path: '/movies/' + movie.id});
      }
    }
}
</script>

<style>

</style>