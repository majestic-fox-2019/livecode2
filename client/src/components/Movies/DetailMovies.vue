<template>
  <div class="container mt-5">
    <h3 class="text-center mb-5">DETAIL MOVIES</h3>
    <b-row>
      <b-col md="5">
        <b-card
          :img-src="movieDetail.poster"
          img-alt="Image"
          img-top
          style="max-width: 20rem;"
          class="mb-5">
          <h4 class="title-movie">{{ movieDetail.title }}</h4>
          <p class="child-title">{{ movieDetail.type}}</p>
          <p class="child-title">{{ movieDetail.year}}</p>
        </b-card>
      </b-col>
      <b-col md="7">
        <b-card>
          <b-button variant="info" size="sm" class="text-left mr-2" @click="modalEdit = true; getEditData(movieDetail)">EDIT MOVIE</b-button>
          <b-button variant="info" size="sm" class="text-left" @click="modalAdd = true">ADD RATING</b-button>
          <div class="no-rate mt-4" v-if="nodata">
            <h4>NO RATING</h4>
          </div>
          <div class="rating mt-4" v-for="(rate, idx) in movieDetail.Rates" :key="idx">
            <div class="left">
              <span class="name-rate">REVIEWER: {{ rate.reviewer }}</span>
              <span class="rate">RATING: {{ rate.point }}</span>
            </div>
            <div class="right">
              <b-button variant="danger" size="sm" class="text-left" @click="deleteReviewer(rate.id)">Delete</b-button>
            </div>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-modal v-model="modalAdd" title="Add Rating">
      <b-form-group>
        <label for="reviewer">Reviewer</label>
        <b-form-input
          id="reviewer"
          v-model="formAdd.reviewer"
          type="text"
          required
          placeholder="Enter reviewer"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="point">Point</label>
        <b-form-input
          id="point"
          v-model="formAdd.point"
          type="number"
          required
          placeholder="1-100"
        ></b-form-input>
      </b-form-group>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="secondary" size="sm" class="float-right" @click="modalAdd=false">Cancel</b-button>
          <b-button variant="primary" size="sm" class="float-right mr-2" @click="addRating">Add Rating</b-button>
        </div>
      </template>
    </b-modal>
    <b-modal v-model="modalEdit" title="Edit Movies">
      <b-form-group>
        <label for="title">Title</label>
        <b-form-input
          id="title"
          v-model="formEdit.title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="year">Year</label>
        <b-form-input
          id="year"
          v-model="formEdit.year"
          type="text"
          required
          placeholder="Enter year"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="type">type</label>
        <b-form-input
          id="type"
          v-model="formEdit.type"
          type="text"
          required
          placeholder="Enter type"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="poster">Poster</label>
        <b-form-input
          id="poster"
          v-model="formEdit.poster"
          type="text"
          required
          placeholder="Enter poster"
        ></b-form-input>
      </b-form-group>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="secondary" size="sm" class="float-right" @click="modalEdit=false;">Cancel</b-button>
          <b-button variant="primary" size="sm" class="float-right mr-2" @click="editMovies">Edit Movie</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data(){
    return {
      movieDetail: {},
      nodata: false,
      modalAdd: false,
      modalEdit: false,
      formAdd:{
        reviewer: null,
        point: null
      },
      formEdit:{
        title: null,
        year: null,
        type: null,
        poster: null,
        imdbID: null
      }
    }
  },
  created(){
    this.getDetailMovie()
  },
  methods: {
    getEditData(movie){
      this.modalEdit = true
      this.formEdit.title = movie.title
      this.formEdit.year = movie.year
      this.formEdit.type = movie.type
      this.formEdit.poster = movie.poster
      this.formEdit.imdbID = movie.imdbID
    },
    addRating(){
      if(this.formAdd.reviewer === null || this.formAdd.point === null){
        this.$vToastify.notifError('Form harus diisi', 'Failed')
      }else if(this.formAdd.point > 100 || this.formAdd.point < 1){
        this.$vToastify.notifError('Point tidak sesuai', 'Failed')
      }else{
        let objData = {
          reviewer: this.formAdd.reviewer,
          point: this.formAdd.point
        }
        axios.post(`http://localhost:3000/rates/${this.id}`, objData)
        .then(res => {
          this.clearForm(this.formAdd)
          this.$vToastify.notifSuccess('Rating berhasil', 'Yeay')
          this.modalAdd = false
          this.getDetailMovie()
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    editMovies(){
      if(this.formEdit.title === null || this.formEdit.year === null || this.formEdit.type === null || this.formEdit.poster === null){
        this.$vToastify.notifError('Form harus diisi', 'Failed')
      }else{
        let objData = {
          title: this.formEdit.title,
          year: this.formEdit.year,
          type: this.formEdit.type,
          poster: this.formEdit.poster,
          imdbID: this.formEdit.imdbID
        }
        axios.put(`http://localhost:3000/movies/${this.id}`, objData)
        .then(res => {
          this.clearForm(this.formEdit)
          this.$vToastify.notifSuccess('Movies berhasil di update', 'Yeay')
          this.modalEdit = false
          this.getDetailMovie()
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    getDetailMovie(){
      axios.get(`http://localhost:3000/movies/${this.id}`)
      .then(res => {
        this.movieDetail = res.data
        if(this.movieDetail.Rates.length === 0){
          this.nodata = true
        }else{
          this.nodata = false
        }
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteReviewer(id){
      this.$vToastify.prompt({
        title: "Peringatan!",
        type: 'warning',
        body: "Anda yakin menghapus?",
        answers: { Yes: true, No: false }
      })
      .then(value => {
        if(value){
          axios.delete(`http://localhost:3000/rates/${id}`)
          .then(res => {
            this.$vToastify.notifSuccess('Rate berhasil di hapus', 'Yeay')
            this.getDetailMovie()
          })
          .catch(err => {
            console.log(err)
          })
        }
      })
    },
    clearForm(form){
      for(let key in form){
        form[key] = null
      }
    }
  }
}
</script>

<style scoped>

</style>