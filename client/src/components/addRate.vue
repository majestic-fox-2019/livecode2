<template>
  <div>
    <form method="POST" v-on:submit.prevent="addRate">
      <div class="form-group">
        <label for="exampleInputEmail1">Reviewer</label>
        <input
          v-model="form.reviewer"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Point</label>
        <input v-model="form.point" type="number" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "addRate",
  data() {
    return {
      form: {
        reviewer: null,
        point: null
      }
    };
  },
  methods: {
    addRate() {
      axios({
        method: "post",
        url: `http://localhost:3000/rate/${this.$route.params.id}`,
        data: {
          reviewer: this.form.reviewer,
          point: this.form.point
        }
      })
        .then(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Rate has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          this.$emit("setRate");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
