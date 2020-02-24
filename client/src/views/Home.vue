<template>
  <div class="home">
    <cardMovie></cardMovie>
    <movieDetail></movieDetail>
  </div>
</template>

<script>
// @ is an alias to /src
import cardMovie from "@/components/cardMovie.vue";
import movieDetail from "@/components/movieDetail.vue";

export default {
  name: "Home",
  components: {
    cardMovie,
    movieDetail
  },
  created() {
    this.$store.dispatch("findAllMovies");
  }
};
</script>
