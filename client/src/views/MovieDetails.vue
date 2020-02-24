<template>
  <div class="container-float">
      <div class="row p-5">
          <div class="col-4">
              <div class="card" style="width: 28rem;">
                <img class="card-img-top" :src="movie.poster" alt="Card image cap">
                <div class="card-body">
                    <h1 class="card-title">{{movie.title}}</h1>
                    <h3 class="card-text">{{movie.type}}</h3>
                    <h1 class="card-text text-muted">{{movie.year}}</h1>
                </div>
              </div>
          </div>
          <div class="col-8">
              <router-view/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name : 'MovieDetails',
    created (){
        this.$store.commit('SET_CURRENT_ID', this.$route.params.id)
        this.$store.dispatch('getOneMovie', this.$route.params.id )
    },
    computed : {
        movie(){
            return this.$store.state.movie
        }
    }
}
</script>

<style>

</style>