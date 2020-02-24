<template>
  <div class="home">
    <div class="row justify-content-center">
      <MovieCard v-for="oneMovie in allMovies" :key="oneMovie.id" :movieNya="oneMovie"></MovieCard>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    MovieCard
  },
  methods: {
    getAllMovie() {
      this.$store.dispatch("getAllMovie");
    }
  },
  mounted() {
    this.getAllMovie();
  },
  computed: {
    allMovies() {
      return this.$store.state.allMovies;
    }
  }
};
</script>
