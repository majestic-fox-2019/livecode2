<template>
  <div>
    <div class="card-header">Rating</div>
    <div class="card-body">
      <ul
        class="list-group list-group-flush"
        v-for="(review, index) in this.$store.state.movie.Ratings"
        :key="index"
      >
        <li class="list-group-item">
          reviews: {{review.reviewer}} || points: {{review.point}}
          <button
            @click="removeRevew(review.id)"
            type="button"
            class="btn btn-light"
          >delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeRevew(id) {
      this.$store.dispatch("removeReview", id);
    }
  }
};
</script>

<style>
</style>