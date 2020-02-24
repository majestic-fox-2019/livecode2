<template>
  <div class="col-md-4 d-flex flex-column shadow-lg p-4">
    <img :src="movie.poster" alt="movie poster" class="m-5" style="height: 20em;" />
    <h4>{{movie.title}}</h4>
    <router-link
      class="btn btn-info"
      :to="{name: 'MovieDetail', params: {id: movie.id}}"
    >See Detail</router-link>
  </div>
</template>

<script>
export default {
  props: ["movie"]
};
</script>

<style>
</style>