<template>
  <div>
    <div v-if="msg" class="alert alert-danger">
      {{msg}}
    </div>
    <form @submit.prevent="postRating">
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
  </div>
</template>

<script>
import api from "../helper/api";
export default {
  data() {
    return { reviewer: "", point: 0, msg: null };
  },
  methods: {
    postRating() {
      const value = {
        reviewer: this.reviewer,
        point: this.point
      };
      api
        .post(`/rates/${this.$route.params.id}`, value)
        .then(({ data }) => {
          this.$router.push({ name: "Ratings" });
        })
        .catch(err => {
          this.msg = err.response.data.message
        });
    }
  }
};
</script>

<style>
</style>