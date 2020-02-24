<template>
  <div id="app">
     <b-container fluid class="bv-example-row">
       <b-row>
        <b-col md="6" offset-md="3" >
          <router-link :to="{name: 'Home'}">home</router-link>
          <router-view/>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
export default {
 
}
</script>

<style>

</style>
