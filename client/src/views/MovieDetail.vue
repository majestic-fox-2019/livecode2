<template>
  <div class="container col-md-12 mt-2">
    <div style="text-align: center;">
        <button-custom text="Edit Movie"></button-custom>
        <button-custom @click="addRating" text="Add Rating" class="ml-2 btn-success"></button-custom>
        <button-custom @click="deleteRating" text="Delete Rating" class="ml-2 btn-danger"></button-custom>
        <a  v-if="movie" :href="'https://www.imdb.com/title/' + movie[0]['imdbID']" target="_blank"><button-custom text="Open IMDB" class="ml-2 btn-info"></button-custom></a>
    </div>
    <div class="container mt-2">
        <div v-if="showAlert" class="alert alert-primary" role="alert">
            {{message}}
        </div> 

        <div class="row">       
            <div class="col-md-4 ">
                <card :movies="movie"></card>
            </div>
            <div class="col-md-8">
                <div class="form-group">
                    <label>Title</label>
                    <input v-model="dataUpdate.title" type="text" class="form-control" placeholder="Title">
                    <label>Year</label>
                    <input v-model="dataUpdate.year" type="number" class="form-control" placeholder="Year">
                    <label>Type</label>
                    <select class="form-control" v-model="dataUpdate.type">
                        <option value="series">Series</option>
                        <option value="movie">Movie</option>
                    </select>
                    <label>Poster</label>
                    <input v-model="dataUpdate.poster" type="text" class="form-control" placeholder="Poster">
                </div>
                <button-custom text="Save" @click="onUpdateMovie" class="btn btn-primary"></button-custom>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button';
import Card from '../components/Card';

export default {
    components: {
        'button-custom': Button,
        'card': Card
    },
    data: function() {
        return {
            showAlert: false,
            message: '',
            movie: null,
            dataUpdate: {
                title: '',
                year: '',
                type: '',
                poster: ''
            }
        }
    },
    methods: {
        loadMovie() {
            this.$store.state.superagent
                .get(`${this.$store.state.backend_url}/movies/${this.$route.params.id}`)
                .end((err, res) => {
                if(err) {
                    console.log(err);
                }else{
                    this.movie = [res.body];
                    this.dataUpdate = {...this.movie[0]};
                }
            });
        },
        onUpdateMovie() {
            this.$store.state.superagent
                .put(`${this.$store.state.backend_url}/movies/${this.$route.params.id}`)
                .send(this.dataUpdate)
                .end((err, res) => {
                if(err) {
                    console.log(err);
                }else{
                    this.loadMovie();
                    this.displayMessage('Berhasil ubah movie!');
                }
            });
        },
        displayMessage(msg) {
            this.showAlert = true;
            this.message = msg;
            setTimeout(() => {
                this.showAlert = false;
                this.message = '';
            }, 3000);
        },
        deleteRating() {
            this.$store.state.superagent
                .delete(`${this.$store.state.backend_url}/rate/${this.$route.params.id}`)
                .end((err, res) => {
                if(err) {
                    console.log(err);
                }else{
                    this.loadMovie();
                    this.displayMessage('Berhasil hapus rating!');
                }
            });
        },
        addRating() {
            this.$store.state.superagent
                .post(`${this.$store.state.backend_url}/rate/${this.$route.params.id}`)
                .send({
                    reviewer: 'OSPT',
                    point: 10
                })
                .end((err, res) => {
                if(err) {
                    console.log(err);
                }else{
                    this.loadMovie();
                    this.displayMessage('Berhasil tambah rating!');
                }
            });
        }
    },
    created() {
        this.loadMovie();
    }
}
</script>

<style>

</style>