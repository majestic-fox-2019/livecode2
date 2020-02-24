<template>
  <div>
    <div class="p-5">
        <div class="form-group">
          <label >Search by title</label>
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="form-group">
          <label >search by type</label>
          <select class="form-control" v-model="type">
            <option>all</option>
            <option>series</option>
            <option>movie</option>
          </select>
        </div>
    </div>
    <div class="d-flex p-3">
      <div class="card" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
      <img :src="movie.poster" class="card-img-top" height="200px">
      <div class="card-body text-center">
        <h5 class="card-title">{{movie.title}}</h5>
        <router-link :to="{name:'Rate',params:{id:movie.id}}" class="btn btn-primary">Detail</router-link>
        <div class="card-text">
          <div>Year : {{movie.year}}</div>
          <div>type : {{movie.type}}</div>
          <a :href="`https://www.imdb.com/title/${movie.imdbID}/`">imdb</a>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"home",
  data() {
    return {
      title:'',
      type:'all'
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$store.dispatch('getMovies')
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    }
  },
  watch: {
    title(){
      if(this.title !== ''){
        this.$store.dispatch('getMoviesTitle',{title:this.title})
      }else{
        this.load()
      }
      
    },
    type(){
      if(this.type !== 'all'){
        this.$store.dispatch('getMoviesType',{type:this.type})
      }else{
        this.load()
      }
      
    }
  }
}
</script>

<style>

</style>