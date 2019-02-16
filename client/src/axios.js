import axios from 'axios';
import browserCookies from 'browser-cookies'
import store from './store'

let api = axios.create();

if (process.env.NODE_ENV == 'production') {
    api.defaults.baseURL = 'http://fetchrapp.com:3000';
  } else {
    api.defaults.baseURL = 'http://127.0.0.1:3000';
  }
  
  api.defaults.withCredentials = true; // force axios to have withCredentials with all requests.

  // request header
api.interceptors.request.use((config) => {
    console.log('interceptor called');
    if(store.getters["login/isLoggedIn"]) {
        config.headers['user_id'] = browserCookies.get('user_id');
        config.headers['token'] = browserCookies.get('token');
        console.log('setting headers');
    //   config.headers = { 'user_id': browserCookies.get('user_id') };
    //   config.headers = { 'token': browserCookies.get('token') };
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  export default api;