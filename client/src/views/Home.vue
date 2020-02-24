<template>
  <div class="home">
    <div class="row justify-content-center">
      <div class="row m-3">
        <input v-model="query" type="text" name="search" id="" placeholder="search...">
        <button @click="filterByName" class="btn btn-dark">Search</button>
      </div>
      <div class="col-12 col-centered">
        <MovieCard v-for="(movie, i) in movies" :key='i' :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '../components/MovieCard'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  created(){
    this.$store.dispatch('getMovies')
  },
  computed : {
    movies : function (){
      return this.$store.state.movies
    }
  },
  data(){
    return {
      query : null
    }
  },
  methods : {
    filterByName(){
      this.$store.dispatch('filterByName', this.query)
    }
  }
}
</script>

<style scoped>
.col-centered{
  float: none;
  margin: 0 auto;
}
</style>
