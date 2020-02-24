<template>
  <div class="container">
    <list-movie></list-movie>
  </div>
</template>

<script>
// @ is an alias to /src

import ListMovie from '../components/ListMovie.vue'
export default {
  name: 'Home',
  components: { ListMovie
  }
}
</script>
