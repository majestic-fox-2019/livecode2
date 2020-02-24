<template>
  <div>
    <div>Halo dari categoryyy</div>
    <MovieCard v-for="one of categorynya" :key="one.id" :movieNya="one"></MovieCard>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
export default {
  name: "category",
  components: {
    MovieCard
  },
  methods: {
    getCategory() {
      let cat = this.$route.params.category;
      this.$store.dispatch("getCategory", cat);
    }
  },
  computed: {
    categorynya() {
      return this.$store.state.categorynya;
    },
    paramsCategory() {
      return this.$route.params.category;
    }
  },
  mounted() {
    this.getCategory();
  },
  watch: {
    paramsCategory() {
      this.getCategory();
    }
  }
};
</script>

<style>
</style>