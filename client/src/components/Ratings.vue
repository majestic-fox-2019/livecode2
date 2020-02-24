<template>
  <div>
    <div v-if="msg" class="alert alert-success">{{msg}}</div>
    <h1>Rating</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Reviewer</th>
          <th scope="col">Point</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rate, i) in ratings" :key="rate.id">
          <th scope="row">{{i + 1}}</th>
          <td>{{rate.reviewer}}</td>
          <td>{{rate.point}}</td>
          <td>
            <a href @click.prevent="deleteRating(rate.id)">delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import api from "../helper/api";
export default {
  data() {
    return {
      ratings: null,
      msg: null
    };
  },
  mounted() {
    console.log(this.movie);
    this.getMovie();
  },
  methods: {
    deleteRating(id) {
      api
        .delete(`/rates/${id}`)
        .then(({ data }) => {
          this.msg = data.message;
          this.ratings = null;
          this.getMovie();
        })
        .catch(err => console.log(err));
    },

    getMovie() {
      api
        .get(`/movies/${this.$route.params.id}`)
        .then(({ data }) => {
          this.ratings = data.Rates;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    movie() {
      return this.$store.state.movies[this.$route.params.id];
    }
  }
};
</script>

<style>
</style>