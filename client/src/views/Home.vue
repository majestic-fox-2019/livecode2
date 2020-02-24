<template>
  <div>
    <b-card class="my-5 text-center mx-auto shadow" style="width:50%;">
      <h2>Home</h2>
    </b-card>

    <div class="row flex justify-content-center my-5">
      <b-card class="col-6 shadow">
        <b-form-group label="Sort by" class="font-weight-bold">
          <b-form-select v-model="filter" :options="options"></b-form-select>
        </b-form-group>
      </b-card>
    </div>
    <!-- <pre>{{ movies }}</pre> -->
    <b-card class="p-5 container shadow">
      <Card v-for="movie in movies" :key="movie.id" :movie="movie" />
    </b-card>
  </div>
</template>

<script>
import Card from '../components/Card'
export default {
  name: 'Home',
  components: {
    Card
  },
  created() {
    this.getAllMovies()
  },
  data() {
    return {
      filter: 'All Type',
      options: [
        'All Type',
        { value: 'movie', text: 'Movie' },
        { value: 'series', text: 'Series' }
      ]
    }
  },
  computed: {
    movies() {
      if (this.filter && this.filter !== 'All Type') {
        return this.$store.state.movieList.filter(
          (el) => el.type == this.filter
        )
      } else {
        return this.$store.state.movieList
      }
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
