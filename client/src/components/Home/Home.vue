<template>
  <div>
    <b-card
      v-for="(movie, idx) in movies" :key="idx"
      :title="movie.title"
      :img-src="movie.poster"
      img-alt="Image"
      img-top
      tag="movies"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ movie.type}}
      </b-card-text>

      <b-button href="#" variant="primary">Detail</b-button>
    </b-card>
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
    }
  }
}
</script>

<style scoped>

</style>