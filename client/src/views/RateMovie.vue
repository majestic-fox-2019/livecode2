<template>
<div>
    <div class="title-movie">
      <h1>{{movie.title}}</h1>
    </div>
  <div class="rate-movie">
    <div class="image-movie">
    <img :src="movie.poster">
    </div>
    <div class='table-rate'>
      <button type="button" class="btn btn-primary button-add" data-toggle="modal"
      data-target="#addRate">Add Rate</button>
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Reviewer</th>
      <th scope="col">Point</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(rate, idx) in rate" :key="idx">
      <th scope="row">{{idx + 1}}</th>
      <td>{{rate.reviewer}}</td>
      <td>{{rate.point}}</td>
      <td><button @click="deleteRate(rate.id)">Delete</button></td>
    </tr>
  </tbody>
</table>
    </div>

<!-- Modal -->
<div class="modal fade" id="addRate" tabindex="-1"
role="dialog" aria-labelledby="addRateTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addRateTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <form @submit.prevent="addRate">
      <div class="modal-body">
  <div class="form-group">
    <label for="reviewer">Reviewer</label>
    <input v-model="formAdd.reviewer" type="text"
    class="form-control" placeholder="Enter your name">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Points</label>
    <input v-model="formAdd.points" type="number" class="form-control" placeholder="Enter points">
  </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
</form>
    </div>
  </div>
</div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'RateMovie',
  data() {
    return {
      movie: '',
      rate: '',
      baseUrl: 'http://localhost:3000',
      formAdd: {
        reviewer: null,
        points: null,
      },
    };
  },
  methods: {
    findOne() {
      axios.get(`${this.baseUrl}/movies/${this.$route.params.id}`)
        .then((movie) => {
          console.log(movie.data);
          this.movie = movie.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllRate() {
      axios.get(`${this.baseUrl}/rates/${this.$route.params.id}`)
        .then((rate) => {
          this.rate = rate.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addRate() {
      axios.post(`${this.baseUrl}/rates/${this.$route.params.id}`, {
        reviewer: this.formAdd.reviewer,
        point: this.formAdd.points,
        MovieId: this.$route.params.id,
      })
        .then(() => {
          window.$('#addRate').modal('hide');
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            onOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: `Add Rate Success from ${this.formAdd.reviewer}`,
          });
          this.formAdd.reviewer = '';
          this.formAdd.points = '';
          this.getAllRate();
        })
        .catch((err) => {
          console.log(err.response.data);
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: `${err.response.data.errors}`,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(err);
        });
    },
    deleteRate(id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Rate has been deleted.',
            'success',
          );
          axios.delete(`${this.baseUrl}/rates/${id}`)
            .then((rate) => {
              console.log('masukk', rate.data);
              this.getAllRate();
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
  },
  created() {
    this.findOne();
    this.getAllRate();
  },
};
</script>

<style scoped>

.image-movie img{
  align-items: center;
  width: 300px;
}

.rate-movie {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center
}

.button-add {
  margin-bottom: 10px;
}

.table-rate {
  margin: 30px;
}

.action {
  margin: 10px;
}

</style>
