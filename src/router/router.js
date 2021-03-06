import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/Login";
import Console from "../components/Console";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/console", component: Console }
  ]
});

export default router;
