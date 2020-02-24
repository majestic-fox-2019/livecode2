<template>
  <div>
    <ItemCard v-if="allData" :data="allData" />
    <a class="mx-3" style="cursor:pointer;" @click.prevent="showAddRate">
      Add Rate</a
    >
    <a class="mx-3" style="cursor:pointer;" @click.prevent="showAllRate">
      All Rate</a
    >
    <a class="mx-3" style="cursor:pointer;" @click.prevent="showEditMovie">
      Edit Movie</a
    >
    <AddRate @success="sukses" :movieId="movieId" v-show="show.AddRate" />
    <AllRate v-if="allData" :allData="allData" v-show="show.AllRate" />
    <EditMovie
      @sukses="suksesEdit"
      v-if="allData"
      :allData="allData"
      v-show="show.EditMovie"
    />
  </div>
</template>

<script>
import axios from 'axios'
import ItemCard from '@/components/ItemCard2.vue'
import AddRate from '@/components/AddRate.vue'
import AllRate from '@/components/AllRate.vue'
import EditMovie from '@/components/EditMovie.vue'
export default {
  name: 'detail',
  components: {
    ItemCard,
    AddRate,
    AllRate,
    EditMovie
  },
  methods: {
    sukses() {
      axios({
        method: 'get',
        url: `http://localhost:3000/movies/${this.$route.params.movieId}`
      })
        .then(({ data }) => {
          this.allData = data
          this.showAllRate()
        })
        .catch(err => {
          console.log(err)
        })
    },
    suksesEdit() {
      axios({
        method: 'get',
        url: `http://localhost:3000/movies/${this.$route.params.movieId}`
      })
        .then(({ data }) => {
          this.allData = data
          this.showAllRate()
        })
        .catch(err => {
          console.log(err)
        })
    },
    showAddRate() {
      this.show.AddRate = true
      this.show.AllRate = false
      this.show.EditMovie = false
    },
    showAllRate() {
      this.show.AddRate = false
      this.show.AllRate = true
      this.show.EditMovie = false
    },
    showEditMovie() {
      this.show.AddRate = false
      this.show.AllRate = false
      this.show.EditMovie = true
    }
  },
  data() {
    return {
      allData: null,
      show: {
        AddRate: false,
        AllRate: true,
        EditMovie: false
      }
    }
  },
  computed: {
    movieId() {
      return this.$route.params.movieId
    }
  },
  created() {
    axios({
      method: 'get',
      url: `http://localhost:3000/movies/${this.$route.params.movieId}`
    })
      .then(({ data }) => {
        this.allData = data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style></style>
