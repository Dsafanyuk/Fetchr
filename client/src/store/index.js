import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import wallet from './modules/wallet'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        cart,
        wallet
    },
    strict: debug,
})
