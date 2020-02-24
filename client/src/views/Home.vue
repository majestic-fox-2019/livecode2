<template>
  <div class="home">
      <div class="container" v-if="show">
        <div class="row">
    <div v-for="movie in allData" :key="movie.id">
      <cardMovie 
      :data="movie"
      @show-selected="selected"></cardMovie>
        </div>
    </div>
      </div>
          <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import cardMovie from '@/components/cardMovie.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    cardMovie,
  },
  data: function(){
    return{
      selectedData: null,
      show: true
    }
  },
  created () {
    this.$store.dispatch('loadData')
  },
  computed: mapState([
    'allData'
  ]),
  methods: {
    selected(data){
      this.show = !this.show
      this.selectedData = data
    }
  }
}
</script>
