<template>
  <div class="container mt-3">
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchByType">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="movieType"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search by Movie Type</button>
    </form>
    <br />
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchByTitle">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="movieTitle"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search by Movie Title</button>
    </form>
    <div class="card mt-3 mb-3" style="max-width: 540px;" v-for="movie in movies" :key="movie.id">
      <div class="row no-gutters">
        <div class="col-md-4">
          <!-- INSERT IMAGE -->
          <img class="card-img" :src="movie.poster" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">Year: {{ movie.year }}</p>
            <p class="card-text">Type: {{ movie.type }}</p>
            <a :href="`https://www.imdb.com/title/${movie.imdbID}`">IMDB</a>
          </div>
          <router-link :to="{ name: 'Detail', params: { id: movie.id}}">
            <button type="button" class="btn btn-primary">Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movieType: null,
      movieTitle: null
    };
  },
  methods: {
    getData() {
      this.$store.dispatch("getMoviesData");
    },
    searchByType() {
      this.$store.dispatch("getFilteredTypeMovies", this.movieType);
    },
    searchByTitle() {
      this.$store.dispatch("getFilteredTitleMovies", this.movieTitle);
    }
  },
  created() {
    this.getData();
  },
  computed: {
    movies() {
      return this.$store.state.listMovies;
    }
  }
};
</script>

<style scoped>
</style>
