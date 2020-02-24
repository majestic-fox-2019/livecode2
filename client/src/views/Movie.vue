<template>
  <div>
    <card :withBtn="true" :movies="movies">
        <button-custom @click="setMovie(movie)" text="Movie Detail"></button-custom>
    </card>
  </div>
</template>
<script>
import Card from '../components/Card';
export default {
  components: {
    'card': Card
  },
  methods: {
    loadMovies() {
      this.$store.state.superagent
        .get(`${this.$store.state.backend_url}/movies`)
        .end((err, res) => {
          if(err) {
            console.log(err);
          }else{
            this.$store.commit('setMovies', res.body);
          }
        });
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  created() {
    this.loadMovies();
  }
}
</script>
<style scoped>
  * {
    margin: 0;
  }
</style>