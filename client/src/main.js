import Vue from 'vue';
import browserCookies from 'browser-cookies'
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
import Account from './Components/Account.vue'
import axios from 'axios';
import store from './store'

import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueToast);
Vue.use(VueMaterial);
Vue.use(Vuetify, {
  theme: {
    primary: '#344955',
    secondary: '#232534',
    lightened: "#4a6572",
    accent: '#f9aa33'
  }
})
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
  {path: '/account', component: Account},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// Called before every route
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(store.getters["login/isLoggedIn"]);
  if(store.getters["login/isLoggedIn"]) {
    next();
  } else if((to.path == "/login") || (to.path == "/register") || (to.path == "/")) {
    next();
  } else {
    next({path:'/login'});
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
  router,
  render: (h) => h(App),
});
