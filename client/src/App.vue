<template>
  <div id="app" class="container mt-5">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('fetchMovies');
  }
}
</script>

<style lang="scss" scoped>
</style>
