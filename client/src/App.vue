<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark bg-primary navbar-fixed-top">
        <router-link to="/">Home</router-link>
        <router-link to="/movies">Movies</router-link>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";

  a {
    color: white;
    text-decoration: none;
    font-size: 17pt;
  }

  a:hover{ 
    text-decoration: none;
    color: lightblue;
  }
</style>