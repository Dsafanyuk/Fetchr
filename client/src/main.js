import Vue from 'vue';
<<<<<<< HEAD
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import VeeValidate from 'vee-validate';
import VueToast from 'vue-toasted';
import App from './Components/App.vue';
import VueRouter from 'vue-router';
import VueSocketio from 'vue-socket.io-extended'
import io from 'socket.io-client'
import Home from './Components/Home.vue';
import Login from './Components/Login.vue';
import Register from './Components/Register.vue';
import Dashboard from './Components/Landing.vue';
import Orders from './Components/Orders.vue';
import Checkout from './Components/Checkout.vue';
import Confirmation from './Components/Confirmation.vue';
import CourierDashboard from './Components/Courier/CourierDashboard.vue';
import Account from './Components/Account.vue'
import store from './store'

import 'vuetify/dist/vuetify.min.css';
Vue.use(VueSocketio, io('http://127.0.0.1:3000'), {store});
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueToast);
Vue.use(Vuetify, {
  theme: {
    primary: '#344955',
    secondary: '#232534',
    lightened: "#4a6572",
    accent: '#f9aa33'
  }
})
Vue.use(Vuex);
=======
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
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
/*----------------------- Routes Declaration -----------------*/
const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
<<<<<<< HEAD
  {path: '/orders', component: Orders},
  {path: '/confirmation', component: Confirmation},
  {path: '/checkout', component: Checkout},
  {path: '/courier', component : CourierDashboard},
  {path: '/dashboard', component: Dashboard},
  {path: '/account', component: Account},
=======
  {path: '/dashboard', component: Landing},
  {path: '/orders', component: Orders},
  {path: '/confirmation', component: Confirmation},
  {path: '/checkout', component: Checkout},
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

<<<<<<< HEAD
// Called before every route
router.beforeEach((to, from, next) => {
  
  if(store.getters["login/isLoggedIn"]) {
    next();
  } else if((to.path == "/login") || (to.path == "/register") || (to.path == "/")) {
    next();
  } else {
    // Redirect to login page
    next({path:'/login'});
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store: store,
=======
if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://fetchrapp.com:3000';
} else {
  axios.defaults.baseURL = 'http://127.0.0.1:3000';
}

axios.defaults.withCredentials = true; // force axios to have withCredentials with all requests.
new Vue({
  el: '#app',
  template: '<App/>',
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
  router,
  render: (h) => h(App),
});
