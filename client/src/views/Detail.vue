<template>
  <div>
    <div>
      <router-link :to="{name:'Home'}">HOME</router-link>
    </div>
    <div class="row">
      <div class="card" style="width: 18rem;">
        <img :src="movie.poster" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{movie.title}}</h5>
          <p class="card-text">{{movie.imdbID}}</p>
        </div>
      </div>
      <div>
        <router-link :to="{name:'Rate'}">Rate</router-link>
        <router-link :to="{name:'Edit'}">Edit</router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from '../views/Rate.vue'
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