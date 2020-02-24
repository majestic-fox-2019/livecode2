<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view></router-view>
    <!-- 
    <div class="row">
      <div class="col-10 offset-1">
        <div class="card mb-3 detailmovie">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src class="card-img" alt />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="row">
                  <div class="col-4">
                    <button type="button" class="btn btn-lg btn-primary" disabled>All Rate</button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-lg btn-primary" disabled>Make a New Rate</button>
                  </div>
                  <div class="col-4">
                    <button type="button" class="btn btn-lg btn-primary" disabled>Home</button>
                  </div>
                </div>
                <p
                  class="card-text"
                >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-10 offset-1">
        <div class="card mb-3 detailmovie">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src class="card-img" alt />
            </div>
            <div class="col-md-8 badan">
              <div class="row">
                <div class="col-4">
                  <button type="button" class="btn btn-lg btn-primary" disabled>All Rate</button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-lg btn-primary" disabled>Make a New Rate</button>
                </div>
                <div class="col-4">
                  <button type="button" class="btn btn-lg btn-primary" disabled>Home</button>
                </div>
              </div>
              <div class="row">
                <div class="col-10">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Reviewer</th>
                        <th scope="col">Point</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>100</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>86</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>90</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      allMovies: null,
      allRate: null
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.detailmovie {
  height: 400px;
}
.badan {
  padding: 20px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
