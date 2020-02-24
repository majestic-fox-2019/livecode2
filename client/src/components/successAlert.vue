<template>
  <div>
    <div class="alert alert-success" role="alert" :class="{ display: toaster === null ? 'none' : 'block' }">
      {{ toaster }}
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>