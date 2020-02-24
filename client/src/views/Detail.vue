<template>
  <div>
    <div class="p-2">
      <router-link :to="{name:'Home'}" class="btn btn-primary">HOME</router-link>
    </div>
    <div class="row p-5">
      <div class="card" style="width: 18rem;">
        <img :src="movie.poster" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title">{{movie.title}}</h5>
          <div class="card-text">
            <div>Year : {{movie.year}}</div>
            <div>type : {{movie.type}}</div>
            <a :href="`https://www.imdb.com/title/${movie.imdbID}/`">imdb</a>
          </div>
        </div>
      </div>
      <div class="pl-5">
        <router-link :to="{name:'Rate'}" class="btn btn-primary mx-2">Rate</router-link>
        <router-link :to="{name:'Edit'}" class="btn btn-primary mx-2">Edit</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"detail",
  props: ['id'],
  created() {
    this.load()
    // this.$router.push({name:'Rate'})
  },
  methods: {
    load() {
      this.$store.dispatch('getDetailMovies',{id:this.id})
    }
  },
  computed: {
    movie(){
      return this.$store.state.movie
    }
  }
}
</script>

<style>

</style>