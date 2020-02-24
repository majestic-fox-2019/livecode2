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
    <button class="btn btn-outline-info btn-sm my-2 my-sm-0" @click="getSeries('series')">Series</button>
    <button class="btn btn-outline-info btn-sm my-2 my-sm-0" @click="getMovie('movie')">Movies</button>
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
      },
      series: [],
      movies: [],
      searchResult: []
    };
  },
  mounted() {
    this.$store.dispatch("getMovies");
  },
  computed: {
    allMovies() {
      if (this.series.length > 0) {
        return this.series;
      } else if (this.movies.length > 0) {
        return this.movies;
      } else {
        return this.$store.state.movies;
      }
    }
  },
  methods: {
    showAll() {
      this.movies = this.allMovies;
    },
    getSeries(type) {
      this.movies = [];
      this.allMovies.forEach(movie => {
        if (movie.type == type) {
          this.series.push(movie);
        }
      });
    },
    getMovie(type) {
      this.series = [];
      this.allMovies.forEach(movie => {
        if (movie.type == type) {
          this.movies.push(movie);
        }
      });
    },
    searchMovies() {
      console.log(this.search.input);
    }
  }
};
</script>

<style scoped>
</style>
