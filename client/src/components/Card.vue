<template>
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
        <a :href="`https://www.imdb.com/title/${movie.imdbID}`">To IMDB</a>
      </b-list-group-item>
      <b-list-group-item>
        <span class="font-weight-bold mr-2">Type:</span>
        {{ movie.type }}
      </b-list-group-item>
      <b-button
        class="mt-5 font-weight-bold"
        @click.prevent="toRate({ id: movie.id, title: movie.title })"
        v-if="!movie.Rates"
        >Rate</b-button
      >
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  name: 'MovieCard',
  props: ['movie'],
  methods: {
    toRate(movie) {
      this.$router.push(`/${movie.id}/${movie.title}`)
    }
  }
}
</script>

<style></style>
