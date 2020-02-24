<template>
  <div>
    <div class="container-fluid m-4">
      <div class="col-md-12 m-4">
        <form @submit.prevent="searchMovie" class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" v-model="form.name" type="search" placeholder="Search movie by title" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search Movie</button>&nbsp;
        </form>
      </div>
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
  data () {
    return {
      form : {
        name : ''
      }
    }
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
    },
    searchMovie(){
      this.$store.dispatch('getMovie', this.form.name, this.form.type)
    }
  }
}
</script>

<style scoped>

</style>