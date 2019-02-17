const state = {
    isConnected : false
}
const mutations = {
    console: (state, status) => {
        console.log('lel')
    },
}
const getters = {
    getConnection:(state)=>{
        return state.isConnected
    }
}
const actions = {
    socket_updateOpenOrders: (state) =>{
        console.log('EVENT RECEIVED: UPDATE_OPEN_ORDERS')
        state.commit('console')
    },
    socket_updateAcceptedOrders: (state) => {
        console.log('EVENT RECEIVED: UPDATE_ACCEPTED_ORDERS')
    },
    socket_updateDeliveredOrders: (state) => {
        console.log('EVENT RECEIVED: UPDATE_DELIVERED_ORDERS')
    },
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
