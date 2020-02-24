<template>
  <v-card class="mx-auto" max-width="480">
    <v-img :src="movie.poster" height="auto"></v-img>

    <v-card-title>
      {{ movie.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ movie.year }}
    </v-card-subtitle>

    <v-card-text>
      <p>{{ movie.imdbID }}</p>
      <p>{{ movie.type }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn text @click.prevent="getDetails(movie.id)">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {}
  },
  props: ['movie'],
  methods: {
    getDetails(id) {
      console.log('INI DETAILS', id)
      this.$router.push('/movie/' + id)
    }
  }
}
</script>

<style lang="scss" scoped></style>
