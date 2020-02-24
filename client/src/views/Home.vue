<template>
  <div class="home">
    <h1>Movie List</h1>
    <div class="filter">
      <button class="filterButton" @click.prevent="filterbyType('series')">Series</button>
      <button class="filterButton" @click.prevent="filterbyType('all')">All</button>
      <button class="filterButton" @click.prevent="filterbyType('movie')">Movie</button>
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
.filterButton {
  width: 7vw;
  height: 5vh;
  margin-left: 1%;
  border: none;
  background: #c1c1c1c1;
  cursor: pointer;
  border-radius: 10px;
}
.filterButton:hover {
  background-color: #999999c1;
}
.filter {
  margin-top: 1%;
  margin-bottom: 2%;
}
.movieList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
