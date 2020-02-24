<template>
  <div class="row">
    <div class="col mt-5" v-for="(movie, index) in this.$store.state.movies" :key="index">
      <div class="card" style="width: 18rem;">
        <img :src="movie.poster" class="card-img-top" />
        <div class="card-body">
          <h3 class="card-title">{{movie.title}}</h3>
          <h4>{{movie.year}}</h4>
        </div>
        <button @click="findOne(movie.id)" class="btn btn-dark">Get Detail</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    findOne(id) {
      this.$router.push(`/${id}`);
    }
  }
};
</script>

<style>
img {
  max-height: 50vh;
}
.card-body {
  min-height: 30vh;
}
</style>