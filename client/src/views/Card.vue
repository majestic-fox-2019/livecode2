<template>
  <div class="card-movie">
    <div class="card" style="width: 18rem;"
    v-for="(movie, idx) in findAllMovies()" :key="idx">
  <img class="card-img-top" :src="movie.poster" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{movie.title}}</h5>
    <hr>
    <p class="card-text">{{movie.year}}</p>
    <hr>
    <h4 class="card-text">{{movie.type}}</h4>
    <a href="#" class="btn btn-primary"><router-link to="/rate">Movie Rate</router-link></a>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      movies: null,
    };
  },
  methods: {
    findAllMovies() {
      return this.$store.state.movies;
    },
  },
};
</script>

<style scoped>
.card-movie {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
  flex-wrap: wrap;
}

.card {
  margin: 20px;
}
</style>
