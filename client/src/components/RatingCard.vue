<template>
    <div class="card text-white bg-dark mb-3" style="max-width: 100%;">
        <div class="card-header">{{rating.reviewer}}</div>
        <div class="card-body">
            <h5 class="card-title">{{rating.point}}</h5>
            <button @click="deleteRating(rating.id)" class="btn btn-secondary">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props : ['rating'],
    methods : {
        deleteRating(id){
            console.log('masuk ke deleteRating')
            console.log(id)
            this.$store.dispatch('deleteRating',id)
        }
    }
}
</script>

<style>

</style>