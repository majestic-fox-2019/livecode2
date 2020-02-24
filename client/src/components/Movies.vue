<template>
  <div class="container">
    <div>
      <!-- {{movie}} -->
      <div class="row row-cols-1 row-cols-md-3 flex" v-for="movie in movielist" :key="movie.id">
        <div class="col mb-4">
          <div class="card">
            <img :src="movie.poster" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{movie.title}}</h5>
              <h4 class="card-title"><a :href="`https://www.imdb.com/title/${movie.imdbID}`">IMDB</a></h4>
              <p class="card-text">
                TYPE : {{movie.type}} <br>
                YEAR : {{movie.year}}
              </p>
                  <a href="#" class="btn btn-primary">View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Home',
  mounted () {
    this.$store.dispatch('GET_MOVIES')
    // this.$store.state()
  },
  computed: {
    movielist () {
      return this.$store.getters.MOVIES
    }
    // ...mapState(['MOVIES'])
  }
}
</script>

<style scoped>

</style>
