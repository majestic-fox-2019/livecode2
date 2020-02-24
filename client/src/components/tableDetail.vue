<template>
  <div class="container" v-if="showDetail">
    <div class="row">
      <div class="col">
        <img :src="showDetail.poster" />
      </div>
      <div class="col">
        <div class="row">
          <h1>{{ showDetail.title }}</h1>
        </div>
        <div class="row">
          <button class="btn btn-primary" v-on:click="getRate">
            Show Rate
          </button>
          <button class="btn btn-primary" v-on:click="addRate">Add Rate</button>
          <button class="btn btn-primary" v-on:click="editMovie">
            Edit Movie
          </button>
        </div>
        <div class="row">
          <div v-if="isRate">
            <showRate></showRate>
          </div>
          <div v-if="isAdd">
            <addRate @setRate="getRate"></addRate>
          </div>
          <div v-if="isEdit">
            <editMovie @showRate="getRate" :movie="showDetail"></editMovie>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import showRate from "../components/showRate";
import addRate from "./addRate";
import editMovie from "./editMovie";
export default {
  name: "tableDetail",
  data() {
    return {
      isRate: true,
      isAdd: false,
      isEdit: false
    };
  },
  components: {
    showRate,
    addRate,
    editMovie
  },
  created() {
    this.$store.dispatch("findMovie", this.$route.params.id);
  },
  computed: {
    showDetail() {
      return this.$store.state.movie;
    }
  },
  methods: {
    getRate() {
      this.isRate = true;
      this.isAdd = false;
      this.isEdit = false;
    },
    addRate() {
      this.isAdd = true;
      this.isRate = false;
      this.isEdit = false;
    },
    editMovie() {
      this.isEdit = true;
      this.isAdd = false;
      this.isRate = false;
    }
  }
};
</script>

<style></style>
