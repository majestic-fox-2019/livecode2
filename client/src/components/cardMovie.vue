<template>
  <div class="card m-2" style="width: 18rem;">
  <img  :src="data.poster" width="350rem" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{data.title}}</h5>
      <p class="card-text">{{data.year}}</p>
      <p class="card-text">{{data.type}}</p>
      <p class="card-text">{{data.imdbID}}</p>
      <a @click="selectedData(data)">
        <router-link :data="selected" class="btn btn-primary" to="/rates">Details</router-link>
      </a>
  </div>
</div>
</template>

<script>
export default {
  props: ['data'],
  data : function (){
    return {
      selected: {},
    }
  },
  name: 'cardMovie',
  methods:{
    selectedData(data){
      this.$emit('show-selected',data)
    }
  }
}
</script>

<style>

</style>