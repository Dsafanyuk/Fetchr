import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import VueToast from 'vue-toasted';
import VueMaterial from 'vue-material';
import App from './Components/App.vue';
import VueRouter from 'vue-router';
import Home from './Components/Home.vue';
import Login from './Components/Login.vue';
import Register from './Components/Register.vue';
import Landing from './Components/Landing.vue';
import Orders from './Components/Orders.vue';
import Checkout from './Components/Checkout.vue';
import Confirmation from './Components/Confirmation.vue';
import axios from 'axios';

import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VeeValidate);
Vue.use(VueToast);
Vue.use(VueMaterial);
Vue.use(Vuex);

/*----------------------- Routes Declaration -----------------*/
const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/dashboard', component: Landing},
  {path: '/orders', component: Orders},
  {path: '/confirmation', component: Confirmation},
  {path: '/checkout', component: Checkout},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://fetchrapp.com:3000';
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
}

const store = new Vuex.Store({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    addItem: (state, product) => {
      state.cart.push(product);
    },
    removeItem: (state, product) => {
      state.cart = state.cart.filter((obj)=>{
        return obj.product_id !== product.product_id
      })
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    totalCartItems(state) {
      return state.cart.length;
    },
    totalCartPrice(state) {
      var total = 0;
      
      state.cart.forEach (function(item){
        total = total + item.price;
      });

      return total.toFixed(2);
    },
  }
});

axios.defaults.withCredentials = true; // force axios to have withCredentials with all requests.
new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  router,
  render: (h) => h(App),
});
