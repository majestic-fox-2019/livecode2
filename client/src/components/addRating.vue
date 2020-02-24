<template>
  <div>
    <form v-on:submit.prevent="addRating" v-if="inputrating">
      <div class="form-group">
        <label>Reviewer</label>
        <input type="text" class="form-control" v-model="addForm.reviewer" />
      </div>
      <div class="form-group">
        <label>Point</label>
        <input type="text" class="form-control" v-model="addForm.point" />
      </div>
      <button type="submit" class="btn btn-info">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["inputrating"],
  data() {
    return {
      addForm: {
        reviewer: null,
        point: null,
        MovieId: this.$route.params.movieId
      }
    };
  },
  methods: {
    addRating() {
      this.$axios({
        method: "post",
        url: `${this.$server}/rates/${this.$route.params.movieId}`,
        data: this.addForm
      })
        .then(result => {
          console.log(result.data);
          this.$Swal.fire({
            icon: "success",
            title: "Success add rating!",
            showConfirmButton: false,
            timer: 1500
          });
          this.addForm.reviewer = null;
          this.addForm.point = null;
          this.$emit("closeFormRating");
          this.$emit("doneAddRating", result.data);
        })
        .catch(err => {
          console.log(err.response.data);
          this.$Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.response.data[0].message
          });
        });
    }
  }
};
</script>

<style>
</style>