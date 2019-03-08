import * as firebase from 'firebase'

const ChatModule = {
  state: {
    chats: []

  },
  mutations: {
    setMessagesEmpty(state) {
      state.messages = []
    },
    setChats(state, payload) {
      state.chats = payload
      console.log("Set Chats " + state.chats);
    }
  },
  actions: {
    sendMessage({
      commit
    }, payload) {
      console.log(payload.content);
      let chatID = payload.chat_id
      const message = {
        user: payload.username,
        content: payload.content,
        //date: payload.date
      }
      firebase.database().ref('messages').child(chatID).child('messages').push(message)
        .then(
          (data) => {}
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    loadChats({commit}, payload) {
      var chatList = []
      // Loop going through each order
      for (var key in payload.orders) {
        if (payload.orders.hasOwnProperty(key)) {
          // Get The chat keys using the Order Id
          let chatref = firebase.database().ref('chats').orderByChild('order_id').equalTo(payload.orders[key]['order_id'])
          .on("value", function(snapshot, dispatch) {
            console.log(snapshot.val());
            chatList.push({chat_key :Object.keys(snapshot.val())[0]})
          })

        }
      }
      commit('setChats', chatList);

    },
    createChat({
      commit,
      dispatch
    }, payload, ) {
      // Generate a conversation ID
      let newPostKey = firebase.database().ref().child('chats').push().key

      let updates = {}
      updates['/chats/' + newPostKey] = {
        name: payload.sender_id + "" + payload.receiver + "" + payload.or_id,
        sender_id: payload.sender_id,
        receiver: payload.receiver,
        order_id: payload.or_id
      }
      firebase.database().ref().update(updates)
      console.log("Here");
      dispatch('sendMessage', {
        chat_id: newPostKey,
        content: payload.message,
        username: payload.sender_id
      });
    }
  },
  getters: {
    messages(state) {
      return state.messages
    },
    chats(state) {
      return state.chats
    }
  }
}

export default ChatModule
