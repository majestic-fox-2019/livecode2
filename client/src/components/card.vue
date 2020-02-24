<template>
  <div>
    <!-- {{ showMovie }} ini data -->
    <div
      v-for="(movie, idx) in showMovie"
      :key="idx"
      class="card"
      style="width: 18rem;"
    >
      <img class="card-img-top" :src="movie.poster" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.year }}</p>
        <p class="card-text">{{ movie.type }}</p>
        <p class="card-text">{{ movie.imdbID }}</p>
        <a v-on:click="getDetail(movie.id)" class="btn btn-primary"
          >Detail Movie</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  created() {
    this.$store.dispatch("showMovie");
  },
  computed: {
    showMovie() {
      return this.$store.state.movies;
    }
  },
  methods: {
    getDetail(id) {
      this.$router.push({ path: `detail/${id}` });
    }
  }
};
</script>

<style></style>
