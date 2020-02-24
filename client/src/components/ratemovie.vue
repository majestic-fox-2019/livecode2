<template>
  <div class="row">
    <div class="col-10 offset-1">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-4 menuu">
              <router-link :to="{name:'DetailMovie'}" class="btn btn-lg btn-primary" disabled>Detail</router-link>
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
        <router-link :to="{name:'AddRate'}" class="btn btn-primary btn-lg">New Rate</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from "sweetalert2";
export default {
  methods: {
    deleteOne() {
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            axios({
              method: "DELETE",
              url: `http:localhost:3000/rate/${id}`
            }).then(response => {
              swalWithBootstrapButtons.fire(
                "Deleted!",
                "Your file has been deleted.",
                "success"
              );
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    }
  }
};
</script>

<style>
.menuu {
  margin-bottom: 20px;
}
</style>