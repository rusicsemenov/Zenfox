import { axiosCatch } from "../axiosCatch";

export default {
  state: {
    users: [],
    dbRequestTime: undefined,
    usersCount: 0
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setCount(state, payload) {
      state.usersCount = payload;
    },
    addUsers(state, payload) {
      state.users.push(payload.user);
    }
  },
  actions: {
    async getUsers({ commit, dispatch }, payload) {
      if (!payload) {
        let payload = { page: 1 };
      }
      await axios
        .get(
          `https://jsonplaceholder.typicode.com/users?_page=${payload.page}&_limit=5`
        )
        .then(response => {
          const count = response.headers["x-total-count"];
          commit("setCount", count);
          return response;
        })
        .then(response => response.data)
        .then(data => {
          commit("setUsers", data);
          dispatch("snackbarInfo", `Данные получены`);
          this.state.users.dbRequestTime = new Date();
        })
        .catch(error => axiosCatch(error, dispatch))
        .finally(() => false);
    },
    addUsers({ commit }, payload) {
      commit("addUsers", payload);
    }
  },
  getters: {
    allUsers(state) {
      return state.users;
    },
    usersCount(state) {
      return state.usersCount;
    },
    getUserById(state) {
      return userId => {
        return state.users.find(user => parseInt(user.id) === parseInt(userId));
      };
    }
  }
};
