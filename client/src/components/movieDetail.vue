<template>
  <div class="col mt-5">
    <div class="card" style="width: 18rem;">
      <img :src="this.$store.state.movie.poster" class="card-img-top" />
      <div class="card-body">
        <h3 class="card-title">{{this.$store.state.movie.title}}</h3>
        <h4>{{this.$store.state.movie.year}}</h4>
        <a
          :href="'https://www.imdb.com/title/' + this.$store.state.movie.imdbID"
          class="card-text"
        >IMDB</a>
        <p class="card-text">type: {{this.$store.state.movie.type}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("findOneMovie", this.$route.params.id);
  }
};
</script>

<style>
</style>