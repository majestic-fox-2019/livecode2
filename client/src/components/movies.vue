<template>
  <div>
    <div v-for="movie in movies" :key="movie.id" class="cardmovie">
      <div class="media">
        <img :src="movie.poster" class="align-self-start mr-3" alt="..." />
        <div class="media-body">
          <h5 class="mt-0">{{movie.title}}</h5>
          <br />
          <p>Released Year: {{movie.year}}</p>
          <p>Type: {{movie.type}}</p>
          <p>IMDB: {{movie.imdbID}}</p>
          <router-link
            :to="{name: 'MovieDetail', params:{movieId: movie.id}}"
            class="btn btn-outline-info"
          >Detail Movie</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movies"]
};
</script>

<style scoped>
img {
  width: 25%;
}
.cardmovie {
  margin: 10px 10% 10px 10%;
  border: 1px solid black;
  padding: 10px;
}
</style>