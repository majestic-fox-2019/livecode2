<template>
  <div class="container mt-5">
    <h3 class="text-center mb-5">LIST MOVIES</h3>
    <b-row>
      <b-col md="3" v-for="(movie, idx) in getMovies" :key="idx">
        <b-card
          :img-src="movie.poster"
          img-alt="Image"
          img-top
          style="max-width: 20rem; min-height:545px"
          class="mb-5">
          <h4 class="title-movie">{{ movie.title }}</h4>
          <p class="child-title">{{ movie.type}}</p>
          <p class="child-title">{{ movie.year}}</p>
          <b-button @click="goDetailMovie(movie)" variant="primary">Detail</b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  created(){
    this.getAllMovies()
  },
  computed: {
    getMovies(){
      return this.$store.state.movies
    }
  },
  methods: {
    getAllMovies(){
      this.$store.dispatch('getAllMovies')
    },
    goDetailMovie(movie){
      this.$router.push({ path: `/detail/${movie.id}`, props: movie.id })
    }
  }
}
</script>

<style scoped>

</style>