<template>
  <div class="home">
    <div class="container">
      <div class="row my-5">
        <movie-item v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "../components/MovieItem";
export default {
  name: "Home",
  components: {
    MovieItem
  },
  created() {
    if (this.movies === null) {
      this.$store.dispatch("getMovies");
      console.log(this.movies);
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>
