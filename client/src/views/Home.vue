<template>
  <div class="home">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="card" style="max-width: 540px;">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src class="card-img" alt />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                {{this.alldata}}
                <h5 class="card-title">Movie Title</h5>
                <p class="card-text">Movie Year</p>
                <p class="card-text">Movie Type</p>
                <router-link :to="{name:'DetailMovie'}">detail</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      alldata: null
    };
  }
};
</script>
