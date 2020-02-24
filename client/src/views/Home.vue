<template>
  <div class="home">
    <center><h1>Welcome to wordclass movie apps</h1></center>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
<style scoped>
  h1{
    margin-top: 30vh;  
  }
</style>