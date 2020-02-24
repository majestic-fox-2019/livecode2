<template>
  <div class="home">
    <MovieContainer></MovieContainer>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieContainer from "@/components/MovieContainer.vue";

export default {
  name: "Home",
  components: {
    MovieContainer
  }
};
</script>
