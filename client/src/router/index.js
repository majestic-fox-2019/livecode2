import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Detail from "../components/Detail.vue";
import Rate from "../components/Rate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/movies/:id",
    name: "Detail",
    component: Detail
  },
  {
    path: "/movies/:id",
    name: "Rate",
    component: Rate
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
