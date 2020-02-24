<template>
  <div>
    <h1>HAI</h1>
    <form>
      <input type="text" v-model="search" />
      <div class="btn btn-primary" @click="searchThis">Search</div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searchThis(e) {
      e.preventDefault();
      console.log("halo");
      this.$store.dispatch("searchThis", this.search);
    }
  }
};
</script>

<style>
</style>