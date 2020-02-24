<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">reviewer</th>
        <th scope="col">point</th>
        <th scope="col">action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(rate, idx) in showRate" :key="idx">
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ rate.reviewer }}</td>
        <td>{{ rate.point }}</td>
        <td><button v-on:click="deleteRate(rate.id)">delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "showRate",
  created() {
    this.$store.dispatch("getRate", this.$route.params.id);
  },
  computed: {
    showRate() {
      console.log(this.$store.state.rates);
      return this.$store.state.rates;
    }
  },
  methods: {
    deleteRate(id) {
      axios({
        method: "delete",
        url: `http://localhost:3000/rate/${id}`
      }).then(data => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.data.msg}`,
          showConfirmButton: false,
          timer: 1500
        });
        this.$store.dispatch("getRate", this.$route.params.id);
      });
    }
  }
};
</script>

<style></style>
