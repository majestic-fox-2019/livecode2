<template>
  <div id="app">
    <div id="nav">
      <div style="cursor: pointer;" @click="toHome">
        <h1 style="margin:0;"><i class="fas fa-home"></i></h1>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    toHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
