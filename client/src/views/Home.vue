<template>
  <div class="home">
    <h1>Movie List</h1>
    <div class="filter">
      <button @click.prevent="filterbyType('series')">Series</button>
      <button @click.prevent="filterbyType('all')">All</button>
      <button @click.prevent="filterbyType('movie')">Movie</button>
    </div>
    <div class="movieList">
      <MovieCard v-for="(movie, i) in $store.state.movieList" :key="i" :movieData="movie"></MovieCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  methods: {
    filterbyType(target) {
      if (target == 'all') {
        this.$store.dispatch('fetchMovies')
      } else {
        this.$store.dispatch('filteredMovies', {
          target: target
        })
      }
    }
  },
  created () {
    this.$store.dispatch('fetchMovies')
  }
}
</script>

<style scoped>
.movieList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
