<template>
  <div class="container-fluid m-4">
    <h1><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> {{ msg }}</h1>
  </div>  
</template>

<script>
export default {
  name : "Title",
  props : {
    msg : String
  }
}
</script>

<style scoped>

</style>