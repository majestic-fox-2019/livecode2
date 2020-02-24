<template>
  <div>
    This Home
    {{movies.title}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      movies: null
    }
  },
  methods: {
    getAllMovie() {
      return this.$store.state.movies
    }
  },
  created () {
    getAllMovie()
  }
}
</script>

<style scoped>

</style>
