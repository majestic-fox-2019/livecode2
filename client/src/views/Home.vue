<template>
  <div>
    <form class="form-inline my-2 my-lg-0" v-on:submit.prevent="searchMovies">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="search.input"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <movies :movies="allMovies" />
  </div>
</template>

<script>
import movies from "../components/movies";
export default {
  components: {
    movies
  },
  data() {
    return {
      search: {
        input: null
      }
    };
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  computed: {
    allMovies() {
      return this.$store.state.movies;
    }
  },
  methods: {
    searchMovies() {
      console.log(this.search);
    }
  }
};
</script>

<style scoped>
</style>
