import axios from '../../axios';

const browserCookies = require('browser-cookies');

const user = browserCookies.get('user_id');

const state = {
  users: [],
};

const getters = {
  showUser(state) {
    return state.users;
  },
};

const actions = {
    editExistingUser: ({ state, commit, dispatch }, data) => {
      console.log(data)
       axios
          .post("/api/user/"+ browserCookies.get("user_id") + "/update", data)
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
    actions,
  };