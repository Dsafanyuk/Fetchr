import * as firebase from 'firebase'

const ChatModule = {
  state: {
    chats: []
  },
  mutations: {
    setMessagesEmpty (state) {
      state.messages = []
    },
    setChats (state, payload) {
      state.chats = payload
    }
  },
  actions: {
    sendMessage ({commit}, payload) {
      console.log(payload.content);
      let chatID = payload.chat_id
      const message = {
        user: payload.username,
        content: payload.content,
        //date: payload.date
      }
      firebase.database().ref('messages').child(chatID).child('messages').push(message)
        .then(
          (data) => {
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
    loadChats ({commit}) {
      // Load all the chats having the Current Logged user (Creator or Receiver)
      firebase.database().ref('chats').on('value', function (snapshot) {
        commit('setChats', snapshot.val())
      })
    },
    createChat ({commit,dispatch}, payload,) {
      // Generate a conversation ID
      let newPostKey = firebase.database().ref().child('chats').push().key

      let updates = {}
            updates['/chats/' + newPostKey] = {name: payload.sender_id + "" + payload.receiver+""+payload.or_id, creator:payload.sender_id, receiver:payload.receiver }
            firebase.database().ref().update(updates)
            console.log("Here");
            dispatch('sendMessage',{chat_id : newPostKey, content : payload.message, username: payload.sender_id });
      /*return new Promise((resolve, reject) => {
              resolve(newPostKey)
            })*/


    }
  },
  getters: {
    messages (state) {
      return state.messages
    },
    chats (state) {
      return state.chats
    }
  }
}

export default ChatModule
