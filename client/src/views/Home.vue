<template>
  <div>
    <b-card class="my-5 text-center mx-auto shadow" style="width:50%;">
      <h2>Home</h2>
    </b-card>
    <!-- <pre>{{ movies }}</pre> -->
    <b-card class="p-5 container shadow">
      <b-card
        :img-src="movie.poster"
        :img-alt="movie.title"
        img-height="500"
        img-width="400"
        img-left
        class="mb-3 shadow"
        v-for="movie in movies"
        :key="movie.id"
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
          <b-button
            class="mt-5 font-weight-bold"
            @click.prevent="toRate({ id: movie.id, title: movie.title })"
            >Rate</b-button
          >
        </b-list-group>
      </b-card>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  created() {
    this.getAllMovies()
  },
  computed: {
    movies() {
      return this.$store.state.movieList
    }
  },
  methods: {
    getAllMovies() {
      this.$store.dispatch('GET_ALL_MOVIES')
    },
    toRate(movie) {
      this.$router.push(`/${movie.id}/${movie.title}`)
    }
  }
}
</script>
