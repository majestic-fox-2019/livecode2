<template>
  <div class="rateCard">
      <div class="reviewer">
          {{rateData.reviewer}}
      </div>
      <div class="Point">
          {{rateData.point}}
      </div>
      <div>
          <button class="deleteButton" @click.prevent="deleteRate(rateData.id)"><i class="far fa-trash-alt"></i></button>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'RatingCard',
  props: {
    rateData: {
        type: Object
    }
  },
  methods: {
      deleteRate (id) {
          Swal.fire({
            title: 'Are you sure you want to delete this Rate?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                this.$store.dispatch('deleteRate', {
                    id: id,
                    movieId: this.$route.params.id
                })
            }
            })
      }
  }
}
</script>

<style scoped>
.deleteButton {
    border: none;
    border-radius: 10px;
    background-color: #fa6464;
    cursor: pointer;
    width: 4vw;
    height: 4vh;
}
.deleteButton:hover {
    background-color: #c75050;
}
.rateCard {
    height: 5vh;
    width: 60vh;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1%;
    border: 1px solid black;
    align-items: center;
}
</style>
