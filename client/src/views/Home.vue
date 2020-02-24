<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Movies/>
  </div>
</template>

<script>
// @ is an alias to /src
import Movies from '@/components/Movies.vue'

export default {
  name: 'Home',
  components: {
    Movies
  },
  methods: {

  }
}
</script>
