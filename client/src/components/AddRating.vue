<template>
  <form @submit="postRating">
    <div class="form-group">
      <label>Reviewer</label>
      <input type="text" v-model="reviewer" class="form-control" aria-describedby="emailHelp" />
    </div>
    <div class="form-group">
      <label>Point</label>
      <input type="number" v-model="point" class="form-control" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import api from "../helper/api";
export default {
  data() {
    return { reviewer: "", point: 0 };
  },
  method: {
    postRating() {
      const value = {
        reviewer,
        point
      };
      api
        .post(`/rates/${this.$route.params.id}`, value)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>