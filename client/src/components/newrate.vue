<template>
  <div class="row">
    <div class="col-8 offset-2 addrate">
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Reviewer</label>
          <input type="text" class="form-control" v-model="reviewer" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Point</label>
          <input type="number" class="form-control" v-model="point" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      reviewer: null,
      point: null
    };
  },
  methods: {
    addRate() {
      axios({
        method: "GET",
        url: "http:localhost:3000/rates/${MoviesId}",
        data: {
          reviewer: this.reviewer,
          point: this.point
        }
      }).then(response => {
        this.$routes.push({ name: "RatingMovie" });
      });
    }
  }
};
</script>

<style>
.addrate {
  border: solid 1px black;
  padding: 10px;
  margin-top: 50px;
}
</style>