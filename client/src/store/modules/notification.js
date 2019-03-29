import  Toasted from 'vue-toasted';
import Vue from 'vue'
import router from '../../router'
const browserCookies = require('browser-cookies')
const user = parseInt(browserCookies.get("user_id")); 
Vue.use(Toasted)
const state = {}
const mutations = {
    NOTIFY_ACCEPTED: (state, message) => {
        if (message.user == user)
        {
            Vue.toasted.show(`Order #${message.order} has been accepted.`, {
                theme: 'bubble',
                duration: 4000,
                action: [
                    {
                        class: 'toast-action',
                        text: 'SHOW',
                        onClick: (e, toastObject) => {
                            router.push(`/view?order=${message.order}`)
                        },
                    },
                    {
                        icon: 'clear',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        },
                    }]
            })
        }
    },
    NOTIFY_DELIVERED: (state, message) => {
        if (message.user == user)
        {
            Vue.toasted.show(`Order #${message.order} has been delivered.`, {
                theme: 'bubble',
                duration: 4000,
                action: [
                    {
                        text: 'SHOW',
                        onClick: (e, toastObject) => {
                            router.push(`/view?order=${message.order}`)
                        },
                    },
                    {
                        icon: 'clear',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
                        },
                    }]
            })}
    }
}
const getters = {
    loadingProducts(state) {
        return Vue.toasted.show("Loading products...", {
                    theme: 'bubble',
                    duration: 4000,
                    position: 'top-center',
                    icon: 'hourglass_empty'
                });
    },
}
export default {
    namespaced: true,
    mutations,
    getters,
}
