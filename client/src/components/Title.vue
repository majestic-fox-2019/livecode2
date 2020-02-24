<template>
  <v-app-bar color="blue accent-4" dark>
    <v-btn icon @click.prevent="backHome">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-toolbar-title v-if="movie == null">Home</v-toolbar-title>
    <v-toolbar-title v-else>{{ movie.title }}</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Title',
  data() {
    return {}
  },
  computed: {
    movie() {
      return this.$store.state.movieDetails
    }
  },
  methods: {
    backHome() {
      this.$store.commit('CLEAR_DETAILS')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped></style>
