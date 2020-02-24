<template>
  <div class="row">
    <div :key="i" v-for="(movie, i) in movieList" class="card m-2" style="width : 20rem">
      <img :src="movie.poster" style="max-height: 350px;"  class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"><i class="fa fa-film" aria-hidden="true"></i> {{ movie.title }}</h5>
        <p class="card-text"><i class="fa fa-globe" aria-hidden="true"></i> {{ movie.year }}</p>
        <p class="card-text"><i class="fa fa-tag" aria-hidden="true"></i> {{ movie.type }}</p>
        <p class="card-text"><i class="fa fa-imdb" aria-hidden="true"></i> <a :href="`https://imdb.com/title/${movie.imdbID}`">IMDB</a></p>
        <router-link :to="{name : 'MovieDetail', params : { movieId : movie.id }}" class="btn btn-primary"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> Movie Detail</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Card',
  props : ['movieList']
}
</script>

<style scoped>
  .card-text {
    padding : 2px !important
  }
</style>