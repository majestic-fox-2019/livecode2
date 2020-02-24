<template>
  <div class="card mb-3" style="max-width: 100%;">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img :src="movie.poster" class="card-img" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h1 class="card-title">{{movie.title}}</h1>
                    <h3 class="card-text">{{movie.type}}</h3>
                    <h1 class="card-text text-muted">{{movie.year}}</h1>
                    <button @click="goToMovieDetails(movie.id)" class="btn btn-dark">Details</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['movie'],
    methods : {
        goToMovieDetails(id){
            console.log('masuk ke gotomoviedetiual')
            this.$router.push('/movies/'+id)
        }
    }
}
</script>

<style>

</style>