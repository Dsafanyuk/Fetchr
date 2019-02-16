const state = {
}
const mutations = {
    console: (state) =>{
        console.log('lel')
    }
}
const getters = {

}
const actions = {
    connectToSocket:(state) =>{
        
    },
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
