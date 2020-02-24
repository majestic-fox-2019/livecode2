<template>
  <div class="MovieDetails">
      <h1>{{$store.state.movieDetails.title}}</h1>
      <div class="movieInfo">
          <div class="moviePoster">
              <img class="posterImg" :src="$store.state.movieDetails.poster" alt="movie poster">
          </div>
          <div class="movieDetailsInfo">
              <div class="top">
                <h2>Year: {{$store.state.movieDetails.year}}</h2>
                <h2>Type: {{$store.state.movieDetails.type}}</h2>
                <h2>IMDB: <a :href="'https://www.imdb.com/title/' + $store.state.movieDetails.imdbID">{{$store.state.movieDetails.imdbID}}</a></h2>
                <div class="buttons">
                    <button @click.prevent="toMovieRating" style="margin-right:1%;">See Ratings</button>
                    <button @click.prevent="toAddRate" style="margin-right:1%;">Add Rating</button>
                    <button>Edit</button>
                </div>
              </div>
              <div class="bottom">
                  <router-view/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  methods: {
      toMovieRating () {
        this.$router.push(`/movie/${this.$route.params.id}/ratings`)
      },
      toAddRate () {
        this.$router.push(`/movie/${this.$route.params.id}/addRate`)
      }
  },
  created () {
    this.$store.dispatch('FetchMovieDetails', {
        id: this.$route.params.id
    })
  }
}
</script>

<style scoped>
.top {
    text-align: left;
}
.buttons {
    display: flex;
    justify-content: start;
}
.movieDetailsInfo {
    width: 90%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    margin-left: 5%;
}
.posterImg {
    height: 100%;
    width: 100%;
    object-fit: contain;
}
.moviePoster {
    height: 100%;
    width: 50%;
}
.movieInfo {
    width: 90%;
    height: 60vh;
    display: flex;
}
.MovieDetails {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>