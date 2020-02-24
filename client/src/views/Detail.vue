<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-12 m-4">
        <h1><i class="fa fa-film" aria-hidden="true"></i> {{ movie.title }}</h1>
      </div>
      <div class="col-md-2 m-4">
        <img :src="movie.poster" style="max-height: 350px;"  class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><i class="fa fa-film" aria-hidden="true"></i> {{ movie.title }}</h5>
          <p class="card-text"><i class="fa fa-globe" aria-hidden="true"></i> {{ movie.year }}</p>
          <p class="card-text"><i class="fa fa-tag" aria-hidden="true"></i> {{ movie.type }}</p>
          <p class="card-text"><i class="fa fa-imdb" aria-hidden="true"></i> <a :href="`https://imdb.com/title/${movie.imdbID}`">IMDB</a></p>
        </div>
      </div>
      <div class="col-md-8 m-4">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
              <router-link :to="{ name: 'AddRating' }" class="nav-link" style="cursor:pointer;">Add Rating</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'UpdateMovie'}" style="cursor:pointer;">Update Movie</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'RateList'}" style="cursor:pointer;">Rate List</router-link>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <router-view />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name : 'DetailMovie',
  data(){
    return {
      movie : null,
    }
  },
  created(){
    this.getMovieDetail()
  },
  methods : {
    getMovieDetail(){
      this.$axios.get(`/movies/${this.$route.params.movieId}`)
      .then(response => {
        this.movie = response.data.body
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.wrapper {
  min-height: 300px;
}
</style>