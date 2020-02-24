<template>
  <div class="col mt-5">
    <nav class="navbar navbar-light bg-light">
      <button @click="whatToShow('rating')" type="button" class="btn btn-light">rating</button>
      <button @click="whatToShow('addRating')" type="button" class="btn btn-light">add rating</button>
      <button @click="whatToShow('updateMovie')" type="button" class="btn btn-light">update movie</button>
    </nav>
    <div class="row">
      <div class="col">
        <div class="card text-dark bg-light" style="max-width: 100%;">
          <rating v-if="this.$store.state.whatNowShow === 'rating'"></rating>
          <formAddRating v-if="this.$store.state.whatNowShow === 'addRating'"></formAddRating>
          <formUpdateMovie v-if="this.$store.state.whatNowShow === 'updateMovie'"></formUpdateMovie>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rating from "@/components/rating.vue";
import formAddRating from "@/components/formAddRating.vue";
import formUpdateMovie from "@/components/formUpdateMovie.vue";
export default {
  components: {
    rating,
    formAddRating,
    formUpdateMovie
  },
  methods: {
    removeRevew(id) {
      this.$store.dispatch("removeReview", id);
    },
    whatToShow(payload) {
      this.$store.state.whatNowShow = payload;
    }
  }
};
</script>

<style>
</style>