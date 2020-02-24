<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <img :src="movie && movie.poster" class="w-100" />
      </div>
      <div class="col-md-6 text-left">
        <h1>{{movie && movie.title}}</h1>
        <div class="btn-group w-100" role="group" aria-label="Basic example">
          <router-link
            :to="{name: 'Ratings', params: {id: movie && movie.id}}"
            class="btn btn-secondary"
          >Rating</router-link>
          <router-link
            :to="{name: 'AddRating', params: {id:movie &&  movie.id}}"
            @click.prevent
            class="btn btn-secondary"
          >Add Rating</router-link>
          <router-link
            :to="{name: 'UpdateMovie', params: {id:movie &&  movie.id}}"
            class="btn btn-secondary"
          >Update</router-link>
        </div>
        <hr />

        <router-view @success="success"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../helper/api";
import Ratings from "../components/Ratings";
export default {
  data() {
    return {
      movie: null,
      isAddRAting: false
    };
  },
  created() {
    this.getMovie();
  },
  mounted() {
    this.getMovie();
  },
  components: {
    Ratings
  },
  methods: {
    success() {
      this.getMovie();
    },
    getMovie() {
      api
        .get(`/movies/${this.$route.params.id}`)
        .then(({ data }) => {
          this.movie = data;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>