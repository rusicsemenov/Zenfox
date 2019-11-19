export default {
    state: {
        snackbar: {
            snackbar: false,
            snackbarColor: "info",
            snackbarText: "Информационное сообщение"
        }
    },
    mutations: {
        showSnackbar(state, payload) {
            state.snackbar = payload;
        },
        closeSnackbar(state) {
            state.snackbar.snackbar = false;
        }
    },
    actions: {
        snackbarSuccess({ commit }, payload) {
            commit("showSnackbar", {
                snackbar: true,
                snackbarColor: "success",
                snackbarText: payload
            });
        },
        snackbarError({ commit }, payload) {
            commit("showSnackbar", {
                snackbar: true,
                snackbarColor: "error",
                snackbarText: payload
            });
        },
        snackbarInfo({ commit }, payload) {
            commit("showSnackbar", {
                snackbar: true,
                snackbarColor: "info",
                snackbarText: payload
            });
        },
        closeSnackbar({ commit }) {
            commit("closeSnackbar");
        }
    },
    getters: {
        snackbar(state) {
            return state.snackbar;
        }
    }
};
