<template>
  <v-card class="mx-auto" max-width="480">
    <v-img :src="movie.poster" height="auto"></v-img>

    <v-card-title>
      {{ movie.title }}
    </v-card-title>

    <v-card-subtitle>
      <h3>{{ movie.year }}</h3>
      <h4>{{ movie.type }}</h4>
    </v-card-subtitle>

    <v-card-text>
      <a :href="link" target="_blank">Go to IMDB Website</a>
    </v-card-text>

    <v-card-actions>
      <v-btn color="green" text @click.prevent="getDetails(movie.id)">Details</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  data() {
    return {
      link: 'https://www.imdb.com/title/' + this.movie.imdbID
    }
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
