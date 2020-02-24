<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="row">
      <div class="col-8 offset-2">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src class="card-img" alt />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Movie Title</h5>
                <p class="card-text">Movie Year</p>
                <p class="card-text">Movie Type</p>
                <router-link :to="{ name: 'DetailMovie', params:{id:1}}">detail</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
