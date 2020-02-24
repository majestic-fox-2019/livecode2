<template>
  <div class="container mt-5 rate-list-container" v-if="getMovieRates()">
    <div class="card" v-for="rate in getMovieRates()" :key="rate.id">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            {{ rate.point }}
          </p>
          <footer class="blockquote-footer">
            {{ rate.reviewer }}
          </footer>
        </blockquote>
        <button class="btn btn-primary mt-3" @click="deleteRate(rate.id)">
          Delete Rate
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateList',
  methods: {
    getMovieRates() {
      return this.$store.state.currentMovie.Rates;
    },
    deleteRate(id) {
      this.$Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(result => {
        if (result.value) {
          this.$axios
            .delete(`/rates/${id}`)
            .then(({ data }) => {
              this.$Swal.fire('Deleted!', data.message, 'success');
              this.$store.dispatch('fetchMovies');
              this.$router.push({ name: 'Home' });
            })
            .catch(err => {
              console.log(err.response);
            });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.rate-list-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
