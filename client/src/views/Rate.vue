<template>
  <b-card class="container my-5">
    <div class="flex border-bottom">
      <b-btn
        @click="$router.push('/')"
        v-b-tooltip.hover
        title="Back to Home"
        class="mb-3"
        >Home</b-btn
      >
    </div>
    <Card :movie="movie" class="mb-5" />

    <b-tabs content-class="my-5" fill>
      <b-tab class="my-5" title="Rating List">
        <b-table striped hover :items="movie.Rates" :fields="fields">
          <template v-slot:cell(actions)="row">
            <b-button
              size="sm"
              class="mr-1"
              variant="danger"
              @click="deleteRate(row.item.id)"
            >
              Delete
            </b-button>
          </template>
        </b-table>
      </b-tab>
      <b-tab title="Rate Movie">
        <b-form @submit.prevent="postRating">
          <b-form-group label="Name:">
            <b-form-input
              type="text"
              v-model="name"
              required
              placeholder="Reviewer name"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Point:" description="Range between 0 - 100">
            <b-form-input
              type="number"
              min="0"
              max="100"
              required
              placeholder="Point"
              v-model="point"
            ></b-form-input>
          </b-form-group>

          <b-btn type="submit">Submit</b-btn>
        </b-form>
      </b-tab>
      <!-- Edit movie -->
      <b-tab title="Edit Movie">
        <b-form @submit.prevent="editMovie">
          <b-form-group label="Title:">
            <b-form-input
              v-model="movie.title"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Year:">
            <b-form-input
              v-model="movie.year"
              type="number"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Type:">
            <b-form-select
              v-model="movie.type"
              :options="['movie', 'series']"
            ></b-form-select>
          </b-form-group>

          <b-form-group label="Poster:">
            <b-form-input
              v-model="movie.poster"
              type="text"
              required
            ></b-form-input>
          </b-form-group>

          <b-btn type="submit">Submit</b-btn>
        </b-form>
      </b-tab>
    </b-tabs>

    <!-- <pre>{{ movie }}</pre> -->
  </b-card>
</template>

<script>
import Card from '../components/Card'
import axios from '../axios'
export default {
  name: 'Rate',
  components: {
    Card
  },
  data() {
    return {
      name: '',
      point: '',
      fields: [
        {
          key: 'reviewer',
          label: 'Reviewer',
          sortable: true
        },
        {
          key: 'point',
          label: 'Point',
          sortable: true
        },
        {
          key: 'actions',
          label: 'Actions'
        }
      ]
    }
  },
  created() {
    const id = this.$route.params.id
    this.getMovieDetail(id)
  },
  computed: {
    movie() {
      return this.$store.state.movieDetail
    }
  },
  methods: {
    getMovieDetail(id) {
      this.$store.dispatch('GET_MOVIE_DETAIL', id)
    },
    deleteRate(rateId) {
      axios({
        method: 'DELETE',
        url: '/rate/' + rateId
      })
        .then(({ data }) => {
          this.$swal.fire('Deleted!', data.message, 'success')
          const id = this.$route.params.id
          this.getMovieDetail(id)
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data
          })
        })
    },

    postRating() {
      const movieId = this.$route.params.id
      axios({
        method: 'POST',
        url: '/rate/' + movieId,
        data: {
          reviewer: this.name,
          point: this.point
        }
      })
        .then(({ data }) => {
          this.$swal.fire(
            `Point ${data.point}!`,
            `Thank you ${data.reviewer}`,
            'success'
          )
          const id = this.$route.params.id
          this.point = null
          this.name = null
          this.getMovieDetail(id)
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data
          })
        })
    },

    editMovie() {
      const movieId = this.$route.params.id
      axios({
        method: 'PUT',
        url: '/movies/' + movieId,
        data: {
          title: this.movie.title,
          year: this.movie.year,
          type: this.movie.type,
          poster: this.movie.poster
        }
      })
        .then(({ data }) => {
          this.$swal.fire(
            `Movie updated!`,
            `With title ${data.title}`,
            'success'
          )
          const id = this.$route.params.id
          this.getMovieDetail(id)
        })
        .catch((err) => {
          this.$swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data
          })
        })
    }
  }
}
</script>

<style></style>
