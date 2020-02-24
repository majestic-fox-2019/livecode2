<template>
  <div class="container">
    <h1>Batman</h1>
    <div class="row">
      <div class="col-4" v-for="(movie, index) in movies" :key="index">
        <Cards :content="movie"></Cards>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from "../components/MovieCard";

export default {
  components: {
    Cards
  },
  name: "Home",
  created() {
    this.$store.dispatch("fetchMovie");
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  }
};
</script>
