import Vue from "vue";
import Vuex from "vuex";
import { routes } from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    musicMessage: [],
    token: "",
    roles: "",
    routes: [],
  },
  getters: {
    getMusic(state) {
      return state.musicMessage;
    },
    // roles(state) { return state.roles }
  },
  mutations: {
    add(state, item) {
      state.musicMessage.push(item);
    },
    sub(state, item) {
      let index = 0;
      for (let i in state.musicMessage) {
        if (item.id === state.musicMessage[i].id) {
          index = i;
          break;
        }
      }
      state.musicMessage.splice(index, 1);
    },
    changeToken(state, token) {
      state.token = token;
    },
    changeRoles(state, roles) {
      state.roles = roles;
    },
    changeRoutes(state, route) {
      state.routes = routes.concat(route);
    },
  },
  actions: {
    addLike(context, item) {
      let isAdd = true;
      for (let item1 of context.state.musicMessage) {
        if (item.id === item1.id) {
          isAdd = false;
          break;
        }
      }
      if (isAdd) context.commit("add", item);
      else context.commit("sub", item);
    }
  },
});
