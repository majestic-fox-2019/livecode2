<template>
  <div>
      <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  created () {
    thuis.$store.dispatch('FetchMovieDetails', {
        id: this.$route.params.id
    })
  }
}
</script>

<style scoped>

</style>