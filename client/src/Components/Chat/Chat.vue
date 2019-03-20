<template>
  <body >

  <v-layout row class="chat_container" >
    <v-flex xs12 sm3 md3 offset-sm1>


      <chatroom @showRoom="fetchMessages"> </chatroom>
    </v-flex>
    <div col-md-6>
      <div class="card-box">
        <h4 class="m-t-0 m-b-20 header-title"><b>Chat</b></h4>

        <div class="chat-conversation"   v-on:scroll="onScroll" ref="chatContainer">
                <ul class="conversation-list nicescroll" tabindex="5001" style="overflow: scroll; outline: none;">
                    <li  v-for="message in chatMessages" class="clearfix"   v-bind:class="displayMessages(message.SenderId)">

                        <div class="conversation-text" >
                            <div class="ctext-wrap">
                              <!--  <i v-html="message.Content">John Deo</i>-->
                                <p v-html="message.Content"> </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="row">
                    <div class="col-sm-9 chat-inputbar">
                        <input type="text" class="form-control chat-input" placeholder="Enter your text"
                          v-on:keyup.enter="sendMessage" v-model="content">
                    </div>
                    <div class="col-sm-3 chat-send">
                        <button type="submit" class="btn btn-md btn-info btn-block waves-effect waves-light"
                        @click="sendMessage">Send</button>
                    </div>
                </div>
            </div>
      </div>

    </div>
</v-layout>


</body>
</template>

<script>
  import ChatRoom from './ChatRoom.vue'
  import * as firebase from 'firebase'
  import browserCookies from "browser-cookies";
  import Messages from './Messages.vue'
  import LandingHeader from '../mini-components/LandingHeader.vue'
  export default {
    data () {
      return {
        username :  browserCookies.get("username"),
        content: '',
        chatMessages: [],
        emojiPanel: false,
        currentRef: {},
        loading: false,
        totalChatHeight: 0,
        currentChatRoom : null,
      }
    },
    props: [
      'id'
    ],
    mounted () {
    //  this.loadChat()
    //  this.$store.dispatch('loadOnlineUsers')
    },
    components: {
      'chatroom': ChatRoom,
      'message' : Messages,
      'LandingHeader' : LandingHeader
    },
    computed: {

      messages () {
        return this.chatMessages
      },
    },
    methods: {
      loadChat () {
          //  this.totalChatHeight = this.$refs.chatContainer.scrollHeight
          //this.loading = false
          let chatRef = firebase.database().ref('messages').orderByChild('OrderId').equalTo(this.currentChatRoom.OrderId).limitToLast(20)
          chatRef.on("value", function(snapshot) {
           console.log(snapshot.val())

          })

      },
      onScroll () {
        let scrollValue = this.$refs.chatContainer.scrollTop
        const that = this
        if (scrollValue < 100 && !this.loading) {
          this.totalChatHeight = this.$refs.chatContainer.scrollHeight
          this.loading = true
          let chatID = this.id
          let currentTopMessage = this.chatMessages[0]
          if (currentTopMessage === undefined) {
            this.loading = false
            return
          }
          firebase.database().ref('messages').child(chatID).child('messages').orderByKey().endAt(currentTopMessage.key).limitToLast(20).once('value').then(
            function (snapshot) {
              let tempArray = []
              snapshot.forEach(function (item) {
                tempArray.push(item)
              })
              if (tempArray[0].key === tempArray[1].key) return
              console.log(tempArray)
              tempArray.reverse()
              tempArray.forEach(function (child) { that.onChildAdded(child, false) })
              that.loading = false
            }
          )
        }
      },

      sendMessage () {
        if (this.content !== '') {
      const  Message_data = {
        OrderId  : this.currentChatRoom.OrderId,
        ReceiverId: this.currentChatRoom.ReceiverId,
        SenderId :  browserCookies.get("user_id"),
        Content : this.content
      }
          this.$store.dispatch('sendMessage', Message_data)
          this.content = '' // Clear after You send the Message
        }
      },
      scrollToEnd () {
        this.$nextTick(() => {
          var container = this.$el.querySelector('.chat-container')
          container.scrollTop = container.scrollHeight
        })
      },
      scrollTo () {
        this.$nextTick(() => {
          let currentHeight = this.$refs.chatContainer.scrollHeight
          let difference = currentHeight - this.totalChatHeight
          var container = this.$el.querySelector('.chat-container')
          container.scrollTop = difference
        })
      },

      fetchMessages(data) {
        // Update the Current Chat Room
        this.currentChatRoom = data
        let refmessages = firebase.database().ref('messages').orderByChild('OrderId').equalTo(data.OrderId).limitToLast(20)
        //refmessages.on('child_added', this.onChildAdded)
        let temp_data = []
        refmessages.on("child_added", function(snapshot) {
          var data = snapshot.val()
          temp_data.push(data)

        })
        this.chatMessages = temp_data
        console.log(this.chatMessages);
      },
      // Style
      displayMessages(SenderId)
      {
        console.log(browserCookies.get("user_id"));
        if( SenderId == browserCookies.get("user_id") )
          return "mymessage"

      },
      getFullName (id)
      {
        axios
        .get("/api/users/" + id +  "/showInfo")
        .then(response => {
            fullname = response.data[0]['first_name'] + " " + response.data[0]['last_name']
            chatList.push({chat_key : temp_chat_key,
              sender_id : temp_sender_id,
             receiver_id :temp_receiver_id,
             order_id : snapshot.val()[temp_chat_key]['order_id'],
             userInfo : temp_fullInfo
            })

        });
      }

    }
  }
</script>

<style>
@import "../assets/courier/css/core.css";
@import "../assets/courier/css/materialdesignicons.css";
@import "../assets/courier/css/components.css";
.mymessage {
  text-align: right;
  color: #344955;
}
.mymessage .ctext-wrap{
  color : white;
  background: #34d3eb
}
.chat-conversation{
  width: 600px
}
.chat_container{
margin-top: 200px;
}
.message_container{
  width: 600px;
  margin-left: 10px;
}
scrollable {
    overflow-y: auto;
    height: 90vh;
  }
  .typer{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    bottom: 0;
    height: 4.9rem;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
  }
  .typer .emoji-panel{
    /*margin-right: 15px;*/
  }
  .typer input[type=text]{
    position: absolute;
    left: 2.5rem;
    padding: 1rem;
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.25rem;
  }
  .chat-container{
    box-sizing: border-box;
    height: calc(100vh - 9.5rem);
    overflow-y: auto;
    padding: 10px;
    background-color: #f2f2f2;
  }
  .message{
    margin-bottom: 3px;
  }
  .message.own{
    text-align: right;
  }
  .message.own .content{
    background-color: lightskyblue;
  }
  .chat-container .username{
    font-size: 18px;
    font-weight: bold;
  }
  .chat-container .content{
    padding: 8px;
    background-color: lightgreen;
    border-radius: 10px;
    display:inline-block;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
    max-width: 50%;
    word-wrap: break-word;
    }
  @media (max-width: 480px) {
    .chat-container .content{
      max-width: 60%;
    }
  }

</style>
