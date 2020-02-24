<template>
  <div class="container">
    {{ showDetail }} ini
    <div class="row">
      ini
    </div>
    <div class="row"></div>
  </div>
</template>

<script>
export default {
  name: "tableDetail",
  created() {
    this.$store.dispatch("findMovie", this.$route.params.id);
  },
  computed: {
    showDetail() {
      console.log(this.$route.params.id);
      return this.$store.state.movie;
    }
  },
  methods: {}
};
</script>

<style></style>
