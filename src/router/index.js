/*
 * @Author: JieLinghu
 * @Date: 2020-01-16 14:45:55
 * @LastEditors: JieLinghu
 * @LastEditTime: 2020-01-17 11:00:58
 * @description: 
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Default from "../views/Default.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Default,
    
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
