import * as firebase from 'firebase'
import axios from "../../axios";
import browserCookies from "browser-cookies";
const ChatModule = {
  state: {
    chats: [],
    UserInfo : "",

  },
  mutations: {
    setMessagesEmpty(state) {
      state.messages = []
    },
    setChats(state, payload) {
      state.chats = payload
    },
    setInfo(state, UserInfo) {
      state.UserInfo = UserInfo
    }
  },
  actions: {
    sendMessage({commit}, payload) {
    firebase.database().ref("messages").push(payload)
    },
    loadChats({commit,dispatch,state}, payload) {
      var chatList = []
      // Loop going through each order
      for (var key in payload.orders) {
        if (payload.orders.hasOwnProperty(key)) {
          // Get The chat keys using the Order Id
          let chatref = firebase.database().ref('chats').orderByChild('order_id').equalTo(payload.orders[key]['order_id'])
          .on("value", function(snapshot) {
            if (snapshot.val() != null)
            {
            var temp_chat_key = Object.keys(snapshot.val())[0]
            var temp_sender_id = snapshot.val()[temp_chat_key]['sender_id']
            var temp_receiver_id = snapshot.val()[temp_chat_key]['receiver']
            var temp_fullInfo = ""
            var id_to_request = 0
            // This determine which info we need to display
            if (temp_sender_id == browserCookies.get("user_id"))
                id_to_request = temp_receiver_id // I don't wan't to display my own name in the chat room
            else
                id_to_request = temp_sender_id


          axios
          .get("/api/users/" + id_to_request +  "/showInfo")
          .then(response => {
              temp_fullInfo = response.data[0]['first_name'] + " " + response.data[0]['last_name']
              chatList.push({chat_key : temp_chat_key,
                sender_id : temp_sender_id,
               receiver_id :temp_receiver_id,
               order_id : snapshot.val()[temp_chat_key]['order_id'],
               userInfo : temp_fullInfo
              })

          });
          }
          })

        }
      }

      commit('setChats', chatList);

    },
    createChat({commit,dispatch}, payload, ) {
      // Generate a conversation ID
      let newPostKey = firebase.database().ref().child('chats').push().key

      let updates = {}
      updates['/chats/' + newPostKey] = {
        sender_id: payload.sender_id,
        receiver: payload.receiver,
        order_id: payload.or_id
      }
      firebase.database().ref().update(updates)
      const  Message_data = {
        OrderId  : payload.or_id,
        ReceiverId: payload.receiver,
        SenderId :  browserCookies.get("user_id"),
        Content : payload.message
      }
      dispatch('sendMessage', Message_data);

    },



  },
  getters: {
    messages(state) {
      return state.messages
    },
    chats(state) {
      return state.chats
    },
    chatInfo (state){
      return state.UserInfo
    }
  }
}

export default ChatModule
