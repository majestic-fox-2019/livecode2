<template>
  <div>
    <h3>RATING</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Reviewer</th>
          <th scope="col">Point</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="rate in rates" :key="rate.id">
        <tr>
          <th scope="row">{{rate.reviewer}}</th>
          <td>{{rate.point}}</td>
          <td>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="deleteRating(rate.id)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["rates"],
  methods: {
    deleteRating(id) {
      this.$axios({
        method: "delete",
        url: `${this.$server}/rates/${id}`
      })
        .then(result => {
          this.$emit("deleted", result.data);
        })
        .catch(err => {
          console.log(err.response);
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