<template>
  <div class="row">
    <div class="col-4">
      <router-link :to="{name:'DetailMovie'}" class="btn btn-lg btn-primary" disabled>Detail</router-link>
    </div>
    <div class="col-4">
      <router-link :to="{name:'RatingMovie'}" class="btn btn-lg btn-primary" disabled>All Rate</router-link>
    </div>
    <div class="col-4">
      <router-link :to="{name:'Home'}" class="btn btn-lg btn-primary" disabled>Home</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>