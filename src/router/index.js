import Vue from "vue";
import Router from "vue-router";

import p404 from "../pages/Http404";
import Home from "../pages/Home";
import Todo from "../pages/Todo";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      meta: { title: "Главная" },
      component: Home
    },
    {
      path: "/todo",
      name: "Todo",
      meta: { title: "Todo" },
      component: Todo
    },
    {
      path: "*",
      name: "p404",
      meta: { title: "404" },
      component: p404
    }
  ]
});
