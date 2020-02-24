<template>
  <form>
        <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input v-model="title" type="text" class="form-control" id="inputPassword" >
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Year Released</label>
            <div class="col-sm-10">
                <input v-model="year" type='text' class="form-control" id="inputPassword" placeholder="2020">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Type</label>
            <div class="col-sm-10">
                <select v-model="type" class="custom-select">
                    <option selected>Type</option>
                    <option value="Movie">Movie</option>
                    <option value="Series">Series</option>
                </select>
            </div>
        </div>
        <button @click="editMovie" class="btn btn-dark">Submit</button>
    </form>
</template>

<script>
export default {
    name : 'EditForm',
    data(){
        return {
            title : this.$store.state.movie.title,
            year : this.$store.state.movie.year,
            type : this.$store.state.movie.type
        }
    },
    methods : {
        editMovie(){
            let payload = {
                title : this.title,
                year : this.year,
                type : this.type,
            }
            this.$store.dispatch('editMovie',payload)
        }
    }
}
</script>

<style>

</style>