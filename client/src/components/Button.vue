<template>
  <button class="btn btn-primary" @click="callback($event)">{{text}}</button>
</template>

<script>
export default {
    props: ["text"],
    methods: {
    callback: function(e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style>

</style>