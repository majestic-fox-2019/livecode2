<template>
  <b-card class="container my-5">
    <div class="flex border-bottom">
      <b-btn
        @click="$router.push('/')"
        v-b-tooltip.hover
        title="Back to Home"
        class="mb-3"
        >Home</b-btn
      >
    </div>
    <b-card
      :img-src="movie.poster"
      :img-alt="movie.title"
      img-height="500"
      img-width="400"
      img-left
      class="my-3 shadow"
    >
      <b-list-group>
        <b-list-group-item>
          <span class="font-weight-bold mr-2">Title:</span>
          {{ movie.title }}
        </b-list-group-item>
        <b-list-group-item>
          <span class="font-weight-bold mr-2">Year Released:</span>
          {{ movie.year }}
        </b-list-group-item>
        <b-list-group-item>
          <span class="font-weight-bold mr-2">IMDB:</span>
          {{ movie.imdbID }}
        </b-list-group-item>
        <b-list-group-item>
          <span class="font-weight-bold mr-2">Type:</span>
          {{ movie.type.toUpperCase() }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Rating List" active>
        <b-card v-for="rate in movie.Rates" :key="rate.id">
          <b-list-group>
            <b-list-group-item>
              <span class="font-weight-bold mr-2">Reviewer:</span>
              {{ rate.reviewer }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-tab>
      <b-tab title="Rate Movie"><p>Add Rating</p></b-tab>
      <b-tab title="Edit Movie"><p>Movie Detail Edit</p></b-tab>
    </b-tabs>

    <pre>{{ movie }}</pre>
  </b-card>
</template>

<script>
export default {
  name: 'Rate',
  created() {
    const id = this.$route.params.id
    this.getMovieDetail(id)
  },
  computed: {
    movie() {
      return this.$store.state.movieDetail
    }
  },
  methods: {
    getMovieDetail(id) {
      this.$store.dispatch('GET_MOVIE_DETAIL', id)
    }
  }
}
</script>

<style></style>
