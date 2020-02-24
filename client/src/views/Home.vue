<template>
  <div class="home">
    <div class="movie-list mt-5">
      <v-row>
        <v-col cols="6" v-for="(movie, i) in movies" :key="i">
          <MovieCard :movie="movie" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'Home',
  components: {
    MovieCard
  },
  computed: {
    movies() {
      return this.$store.state.movies.filter(
        el =>
          el.title
            .toLowerCase()
            .includes(this.$store.state.searchKey.toLowerCase()) ||
          el.type.toLowerCase() === this.$store.state.searchKey.toLowerCase()
      )
    }
  },
  created() {
    this.$store.dispatch('FETCH_MOVIES')
  }
}
</script>
