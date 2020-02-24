<template>
  <div>
    <movies :movies="allMovies" />
  </div>
</template>

<script>
import movies from "../components/movies";
export default {
  components: {
    movies
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  computed: {
    allMovies() {
      return this.$store.state.movies;
    }
  }
};
</script>

<style scoped>
</style>
