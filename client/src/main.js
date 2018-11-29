import Vue from 'vue';
import Vuetify from 'vuetify';
import VueToast from 'vue-toasted';

import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import App from './App.vue';
import Home from './Components/Home.vue';
import Login from './Components/Login.vue';
import Register from './Components/Register.vue';
import Landing from './Components/Landing.vue';
import Orders from './Components/Orders.vue';

import 'vuetify/dist/vuetify.min.css';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueToast);
Vue.use(VueMaterial);
/* ----------------------- Routes Declaration -----------------*/
const routes = [
  {path: '/', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/dashboard', component: Landing},
  {path: '/orders', component: Orders},
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  render: (h) => h(App),
});
