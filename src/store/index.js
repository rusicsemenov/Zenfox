import Vue from "vue";
import Vuex from "vuex";
import snackbar from "./snackbar";
import users from "./users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    snackbar,
    users
  },
  state: {
    loader: true
  },
  getters: {
    loader(state) {
      return state.loader;
    }
  },
  mutations: {
    loaderOn(state) {
      state.loader = true;
    },
    loaderOff(state) {
      state.loader = false;
    }
  },
  actions: {
    loaderOn({ commit }) {
      commit("loaderOn");
    },
    loaderOff({ commit }) {
      commit("loaderOff");
    }
  }
});
