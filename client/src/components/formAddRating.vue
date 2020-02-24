<template>
  <div>
    <div class="card-header">Add Your Rating</div>
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="reviewer">Reviewers</label>
          <input v-model="review" type="text" class="form-control" id="reviewer" required />
        </div>
        <div class="form-group">
          <label for="point">Point</label>
          <input v-model="poin" type="number" class="form-control" id="point" />
        </div>
        <button @click.prevent="addReview" type="submit" class="btn btn-dark">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review: "",
      poin: ""
    };
  },
  methods: {
    addReview() {
      this.$store.dispatch("addNewReviewer", {
        reviewer: this.review,
        point: this.poin
      });
    }
  }
};
</script>

<style>
</style>