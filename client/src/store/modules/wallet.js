import axios from 'axios'
import browserCookies from 'browser-cookies'
const api = axios.create();

const state = {
    showWallet: false,
    walletBalance: null,
}

const actions = {
    getWalletBalance: (state) => {
        api.get("/api/users/" + browserCookies.get("user_id") + "/wallet")
            .then(response => {
                state.commit('setWallet', response.data[0].wallet.toFixed(2))
            })
            .catch(() => {
                this.walletBalance = "error";
            });
    }
}
const mutations = {
    setWallet: (state, value) => {
        console.log(value)
        state.walletBalance = value
    },
    toggleWallet: (state, value) => {
        state.showWallet = value
    },
}
const getters = {
    walletBalance(state) {
        return state.walletBalance
    },
    walletIsActive(state) {
        return state.showWallet
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
