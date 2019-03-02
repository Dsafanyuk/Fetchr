import  Toasted from 'vue-toasted';
import Vue from 'vue'
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
                duration: 2000,
                action: [
                    {
                        text: 'SHOW',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
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
                duration: 2000,
                action: [
                    {
                        text: 'SHOW',
                        onClick: (e, toastObject) => {
                            toastObject.goAway(0);
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
export default {
    namespaced: true,
    mutations
}
