<template>
    <form>
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Reviewer</label>
            <div class="col-sm-10">
                <input v-model="reviewer" type="text" class="form-control" id="inputPassword" placeholder="John Doe">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Point</label>
            <div class="col-sm-10">
                <input v-model="point" type="number" class="form-control" id="inputPassword" placeholder="1-100">
            </div>
        </div>
        <button @click="addNewRating" class="btn btn-dark">Submit</button>
    </form>
</template>

<script>
export default {
    name : 'RatingForm',
    data(){
        return {
            reviewer : null,
            point : null,
            MovieId : this.$route.params.id
        }
    },
    methods : {
        addNewRating(){
            let payload = {
                reviewer : this.reviewer,
                point : this.point,
                MovieId : this.MovieId,
            }

            this.$store.dispatch('addNewRating', payload)
        }
    }

}
</script>

<style>

</style>