<template>
  <div class="home">
    <listmovies
      v-for="(movie, i) in movies"
      :key="i"
      :content="movie"
    ></listmovies>
  </div>
</template>

<script>
// @ is an alias to /src
import listmovies from '@/components/listMovies.vue'

export default {
  name: 'Home',
  components: {
    listmovies
  },
  data() {
    return {

    }
  },
  created() {
   this.$store.dispatch('getMovies')
  },
  computed: {
    movies() {
      return this.$store.state.movies
    }
  }
}
</script>
