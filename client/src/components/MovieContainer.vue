<template>
  <div class="container movie-container">
    <div class="card movie-card" style="width: 18rem;" v-for="movie in fetchMovies()" :key="movie.id">
      <img :src="movie.poster" class="card-img-top" :alt="movie.title" />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <router-link class="btn btn-primary" :to="`/movie/${movie.id}`">See More</router-link>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ movie.year }}</li>
        <li class="list-group-item">{{ movie.type.toUpperCase() }}</li>
      </ul>
      <div class="card-body">
        <a :href="`https://www.imdb.com/title/${movie.imdbID}`" class="card-link" target="_blank">IMDb</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fetchMovies() {
      return this.$store.state.movies;
    }
  }
};
</script>

<style lang="scss" scoped>
  .movie-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .movie-card {
      margin: 1em;
    }

    button {
      margin: 8px;
    }
  }
</style>
