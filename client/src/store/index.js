import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
import wallet from './modules/wallet'
import courier from './modules/courier'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: {
        cart,
        courier,
        wallet,
    },
    strict: debug,
})
