import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import About from "../views/About.vue";
import Help from "../views/Help.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/library",
    name: "Library",
    component: Library
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/help",
    name: "Help",
    component: Help
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;