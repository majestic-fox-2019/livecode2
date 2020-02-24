<template>
  <div class="row">
    <div class="col-10 offset-1 behalter">
      <div class="card mb-3 detailmovie">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src class="card-img" alt />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="row">
                <div class="col-4">
                  <router-link
                    :to="{name:'DetailMovie'}"
                    class="btn btn-lg btn-primary"
                    disabled
                  >Detail</router-link>
                </div>
                <div class="col-4">
                  <router-link
                    :to="{name:'RatingMovie'}"
                    class="btn btn-lg btn-primary"
                    disabled
                  >All Rate</router-link>
                </div>
                <div class="col-4">
                  <router-link :to="{name:'Home'}" class="btn btn-lg btn-primary" disabled>Home</router-link>
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
</template>

<script>
export default {};
</script>

<style>
.detailmovie {
  height: 400px;
}
.behalter {
  margin-top: 100px;
}
</style>