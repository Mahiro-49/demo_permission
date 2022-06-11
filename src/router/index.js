import Vue from "vue";
import VueRouter from "vue-router";

import Home from "views/home/home.vue";
import Recomment from "views/recomment/recomment.vue";
import New from "views/new/new.vue";
import NewMv from "views/newmv/newmv.vue";
import Search from "views/search/search.vue";
import Login from "views/login_register/login.vue";
import Index from "views/index.vue";
import List from "views/playList/playlist.vue";
import Mv from "views/mv/mv.vue";
import Like from "views/Like/like.vue";
Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/index/home",
  },
  {
    path: "/index",
    redirect: "/index/home",
    meta: {
        roles: ["admin", "editor"],
    },
    component: Index,
    children: [
      {
        path: "home",
        component: Home,
        meta: {
            roles: ["admin", "editor"],
        }
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    meta: {
        roles: ["admin", "editor"],
    },
  },
];

export const otherRoutes = [
  {
    path: "/recomment",
    component: Recomment,
    meta: {
      roles: ["admin"],
    },
  },
  {
    path: "/new",
    component: New,
    meta: {
      roles: ["editor"],
    },
  },
  {
    path: "/newmv",
    component: NewMv,
    meta: {
      roles: ["admin"],
    },
  },
  {
    path: "/search/:name",
    component: Search,
    meta: {
      roles: ["editor"],
    },
  },
  {
    path: "/playlist/:id",
    component: List,
    meta: {
      roles: ["admin"],
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
