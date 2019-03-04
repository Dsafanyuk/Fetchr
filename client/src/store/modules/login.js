import axios from 'axios'
import browserCookies from 'browser-cookies'
const api = axios.create();

const state = {
    isLoggedIn: false,
    pending: false,
}

const actions = {
    login: (state) => {
        state.commit('pending');
        return new Promise(resolve => {
            setTimeout(() => {
                state.commit('loginSuccess');
                resolve();
                }, 100);
        });
    },
    logout: (state) => {
        state.commit('logoutSuccess');
    }
}
const mutations = {
    pending (state) {
    state.pending = true;
    },
    loginSuccess(state) {
    state.isLoggedIn = true;
<<<<<<< HEAD
    console.log("login status changed to true");
    state.pending = false;
    },
    logoutSuccess(state) {
    console.log("login status changed to false");
=======
    state.pending = false;
    },
    logoutSuccess(state) {
>>>>>>> 0bc0b1315c52f629686439fe18b94b4e458e8741
    state.isLoggedIn = false;
    },
}
const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn
    }
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
