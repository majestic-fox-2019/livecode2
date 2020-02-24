<template>
  <div class="p-5">
    <form @submit.prevent="addRate">
      <div class="form-group">
        <label >Reviewer</label>
        <input type="text" class="form-control" v-model='reviewer'>
      </div>
      <div class="form-group">
        <label >Point</label>
        <input type="number" class="form-control" v-model='point'>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Reviewer</th>
      <th scope="col">Point</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'Rate',
  props:['id'],
  data() {
    return {
      reviewer:'',
      point:''
    }
  },
  methods:{
    addRate() {
      axios({
        method:"post",
        url:`http://localhost:3000/rates${this.id}`,
        data:{
          reviewer:this.reviewer,
          point:this.point
        }
      })
      .then(res => {

      })
      .catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>