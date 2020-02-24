<template>
  <div class="container">
    <div class="row">
      <div class="col-4">
        <img :src="movie.poster" alt style="max-height :50%" />
      </div>
      <div class="col">
        <div class="row">
          <h2>Title : {{movie.title}}</h2>
        </div>
        <div class="row" v-for="(rate, index) in rating" :key="index">
          <Rating :content="rate"></Rating>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from "../components/Rating";
export default {
  components: {
    Rating
  },
  name: "Detail",
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies", this.$route.params.id);
    }
  },
  computed: {
    movie() {
      return this.$store.state.movie;
    },
    rating() {
      return this.$store.state.movie.Ratings;
    }
  }
};
</script>