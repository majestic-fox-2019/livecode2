<template>
  <v-app-bar color="blue accent-4" dark>
    <v-btn icon @click.prevent="backHome">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-toolbar-title
      style="cursor: pointer;"
      v-if="movie == null"
      @click.prevent="backHome"
      >Home</v-toolbar-title
    >
    <v-toolbar-title v-else>{{ movie.title }}</v-toolbar-title>
    <v-btn @click.prevent="seriesSearch" class="ml-5" color="red">Series</v-btn>
    <v-btn @click.prevent="movieSearch" class="ml-5" color="orange"
      >Movie</v-btn
    >
    <v-spacer></v-spacer>

    <v-form @submit.prevent="searchMovie">
      <v-text-field
        class="mx-4"
        flat
        hide-details
        label="Search"
        v-model="search"
      ></v-text-field>
    </v-form>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    movie() {
      return this.$store.state.movieDetails
    }
  },
  methods: {
    backHome() {
      this.$store.commit('CLEAR_DETAILS')
      this.$store.commit('SEARCH_KEY', '')
      this.$router.push('/')
    },
    searchMovie() {
      this.$store.commit('SEARCH_KEY', this.search)
    },
    movieSearch() {
      this.$router.push('/movie')
      this.$store.commit('SEARCH_KEY', 'Movie')
    },
    seriesSearch() {
      this.$router.push('/series')
      this.$store.commit('SEARCH_KEY', 'Series')
    }
  },
  watch: {
    search(val, old) {
      this.$store.commit('SEARCH_KEY', val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
