<template>
  <div>
    <div class="card" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
      <img :src="movie.poster" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
        <router-link :to="{name:'Rate',params:{id:movie.id}}">Detail</router-link>
        <p class="card-text">{{movie.imdbID}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"home",
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$store.dispatch('getMovies')
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    }
  }
}
</script>

<style>

</style>