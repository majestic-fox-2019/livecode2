<template>
  <div class="detailCard">
    <div class="row">
      <movieDetail></movieDetail>
      <navbarDetail></navbarDetail>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import movieDetail from "@/components/movieDetail.vue";
import navbarDetail from "@/components/navbarDetail.vue";

export default {
  name: "DetailCard",
  components: {
    movieDetail,
    navbarDetail
  },
  created() {
    this.$store.dispatch("findOneMovie");
  }
};
</script>
