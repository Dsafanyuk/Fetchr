import axios from '../../axios';

const browserCookies = require('browser-cookies');

const user = browserCookies.get('user_id');

const state = {
  user: {},
};

const actions = {
  editExistingUser: ({ state, commit, disptach }, data) => {
    console.log(data);
    axios
      .put(`/api/users/${browserCookies.get('user_id')}`, data)
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
  actions,
};
