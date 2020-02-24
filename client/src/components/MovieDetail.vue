<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <img :src="movie.poster" class="w-100" />
      </div>
      <div class="col-md-6 text-left">
        <h1>{{movie.title}}</h1>
        <div class="btn-group w-100" role="group" aria-label="Basic example">
          <router-link :to="{name: 'AddRating', params: {id: movie.id}}" @click.prevent="" class="btn btn-secondary">Add Rating</router-link>
          <!-- <router-link
            :to="{name: 'UpdateMovie', params: {id: movie.id}}"
            class="btn btn-secondary"
          >Edit</router-link> -->
          <!-- <router-link class="btn btn-secondary">Delete</router-link> -->
        </div>
        <hr />

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
            <tr v-for="rate in movie.Rate" :key="rate.id">
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../helper/api";
export default {
  data() {
    return {
      movie: null,
      isAddRAting: false
    };
  },
  created() {
    api
      .get(`/movies/${this.$route.params.id}`)
      .then(({ data }) => {
        this.movie = data;
      })
      .catch(err => console.log(err));
  }
};
</script>

<style>
</style>