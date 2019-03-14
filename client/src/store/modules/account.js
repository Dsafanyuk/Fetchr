import axios from 'axios'
import browsercookies from "browser-cookies";
const api = axios.create();

const state = {
    count: 0,

}
const mutations = {
    UpdateAccountInfo ({commit},payload)
    {
        console.log (payload)
        axios.post('http://127.0.0.1:3000/api/account/updateInfo', {
                    fieldname: payload.fname,
                    data : payload.data,
                    user_id: browsercookies.get('user_id')
                })
                .then((response) => {
                   if (response.status == 200) {
                   }
                })
                .catch(function (error) {
                   if(error.response.status == 500) {
                        console.log(response.data)
                   }
                })

    }
}

export default {
    namespaced: true,
    state,
    mutations
}
