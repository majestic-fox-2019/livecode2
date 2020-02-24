<template>
  <div class="details mt-5">
    <v-row>
      <v-col cols="4">
        <MovieCard :movie="movie" />
      </v-col>
      <v-col cols="8">
        <router-view />
        <Toolbar />
        <RatingForm v-if="rating" />
        <v-row v-else>
          <v-col cols="4" v-for="(rating, i) in movie.Rates" :key="i">
            <RatingCard :rating="rating" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import Toolbar from '@/components/RatingToolbar'
import RatingCard from '@/components/RatingCard'
import RatingForm from '@/components/RatingForm'

export default {
  name: 'DetailPage',
  data() {
    return {}
  },
  components: {
    MovieCard,
    Toolbar,
    RatingCard,
    RatingForm
  },
  computed: {
    movie() {
      return this.$store.state.movieDetails
    },
    rating() {
      return this.$store.state.addRating
    }
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('FETCH_DETAILS', id)
  }
}
</script>

<style lang="scss" scoped></style>
