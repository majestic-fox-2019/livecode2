<template>
  <div class="movie-card">
      <div class="moviePoster">
          <img class="moviePoster-img" :src="movieData.poster" alt="moviePoster">
      </div>
      <div class="movieDetails">
          <h1>{{movieData.title}}</h1>
          <h4>{{movieData.year}}</h4>
          <a :href="'https://www.imdb.com/title/' + movieData.imdbID">IMDB</a>
          <h2>{{movieData.type}}</h2>
          <button class="seeDetailsButton" @click.prevent="toDetails(movieData.id)">See Details</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieData: {
      type: Object
    }
  },
  methods: {
    toDetails (id) {
        this.$router.push(`/movie/${id}`)
    }
  }
}
</script>

<style scoped>
.seeDetailsButton {
  width: 7vw;
  height: 5vh;
  margin-left: 1%;
  border: none;
  background: #b8f0a9c1;
  cursor: pointer;
  border-radius: 10px;
}
.seeDetailsButton:hover {
    background: #86af7ac1;
}
.moviePoster-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.movie-card {
    height: 50vh;
    width: 90vw;
    display: flex;
    margin-bottom: 2%;
}
.moviePoster {
    height: 100%;
    width: 50%;
}
.movieDetails {
    height: 100%;
    width: 10%;
    text-align: center;
}
</style>