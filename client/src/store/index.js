import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cart from './modules/cart'
import wallet from './modules/wallet'
import courier from './modules/courier'
import login from './modules/login'
<<<<<<< HEAD
=======
import notification from './modules/notification'
>>>>>>> 0bc0b1315c52f629686439fe18b94b4e458e8741

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    plugins: [createPersistedState({
        reducer: (persistedState) => {
            const stateFilter = Object.assign({}, persistedState)
            const blackList = ['courier']

            blackList.forEach((item) => {
                delete stateFilter[item]
            })
            return stateFilter
        }
    })],
    modules: {
        cart,
        courier,
        wallet,
        login,
<<<<<<< HEAD
=======
        notification,
>>>>>>> 0bc0b1315c52f629686439fe18b94b4e458e8741
    },
    strict: debug,
});
