<template>
  <v-form>
    <v-container>
      <h2>Edit Movie Data</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="movie.title"
            label="Title"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="movie.year"
            label="Year"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="movie.imdbID"
            label="IMDB ID"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-select
            v-model="movie.type"
            :items="['series', 'movie']"
            label="Standard"
          ></v-select>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="movie.poster"
            label="Poster"
            required
          ></v-text-field>
        </v-col>

        <v-btn class="mr-4" color="primary" @click.prevent="submitData"
          >submit</v-btn
        >
        <v-btn class="mr-4" color="warning" @click.prevent="closeForm"
          >back</v-btn
        >
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'MovieForm',
  data() {
    return {
      form: {
        title: null,
        year: null,
        imdbID: null,
        type: null,
        poster: null
      }
    }
  },
  computed: {
    movie() {
      return this.$store.state.movieDetails
    }
  },
  methods: {
    submitData() {
      this.$store.dispatch('EDIT_MOVIE')
    },
    closeForm() {
      this.$router.push('/movie/' + this.movie.id)
    }
  }
}
</script>
