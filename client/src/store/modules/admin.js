import axios from '../../axios';

const browserCookies = require('browser-cookies');

const user = browserCookies.get('user_id');

const state = {
  products: [],
};

const mutations = {
  setProducts: (state, data) => {
    state.products.push(data);
  },
};

const getters = {
  showProducts(state) {
    return state.products;
  },
};

const actions = {
  retrieveProducts: ({ state, getters, commit }) => {
    axios.get('api/admin/products').then((response) => {
      response.data.forEach((product) => {
        commit('setProducts', product);
      });
    });
  },
  sendForm: ({ state }, data) => {
    axios
      .post('api/admin/products', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
