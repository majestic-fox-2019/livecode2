<template>
  <div class="container mt-3">
    <form class="form-inline my-2 my-lg-0" @submit.prevent="searchByType">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
  methods: {
    getData() {
      this.$store.dispatch("getMoviesData");
    }
    // searchByType(){
    //   this.$store.dispatch("getMoviesData", type)
    // }
  },
  created() {
    this.getData();
  },
  computed: {
    movies() {
      console.log(this.$store.state.listMovies);
      return this.$store.state.listMovies;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
