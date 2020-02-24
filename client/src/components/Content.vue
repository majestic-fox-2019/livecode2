<template>
  <div>
    <div class="container-fluid m-4">
        <Card :movieList="movies"/>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

export default {
  name : 'Content',
  components : {
    Card
  },
  created(){
    this.getMovie()
  },
  computed : {
    movies(){
      return this.$store.state.movies
    }
  },
  methods : {
    getMovie(){
      this.$store.dispatch('getMovie')
    }
  }
}
</script>

<style scoped>

</style>