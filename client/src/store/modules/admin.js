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
  resetProducts: (state) => {
    state.products = [];
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
  createNewProduct: ({ state, commit, dispatch }, data) => {
    const formData = new FormData();
    Object.keys(data).forEach((formPart) => {
      formData.append(formPart, data[formPart]);
    });
    axios
      .post('api/admin/products', formData)
      .then((response) => {
        console.log(response);
        commit('resetProducts');
        dispatch('retrieveProducts');
      })
      .catch((err) => {
        console.log(err);
      });
  },
  editExistProduct: ({ state, commit, dispatch }, data) => {
    const formData = new FormData();
    Object.keys(data).forEach((formPart) => {
      formData.append(formPart, data[formPart]);
    });

    axios
      .put(`api/admin/product/${data.product_id}`, formData)
      .then((response) => {
        console.log(response);
        commit('resetProducts');
        dispatch('retrieveProducts');
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
