<template>
  <body >

  <v-layout row class="chat_container" >
    <v-flex xs12 sm3 md3 offset-sm1>


      <chatroom @showRoom="fetchMessages"> </chatroom>
    </v-flex>
    <div col-md-6>
      <div class="card-box" >
        <h4 class="m-t-0 m-b-20 header-title"><b>Chat</b></h4>

        <div class="chat-conversation" id="chat-conversation"  ref="chatContainer" style="max-height:300px; overflow-y: auto;">
                <ul class="conversation-list"  v-chat-scroll tabindex="5001" >
                    <li  v-for="message in chatMessages" class="clearfix"   v-bind:class="displayMessages(message.SenderId)">

                        <div class="conversation-text" >
                            <div class="ctext-wrap">
                              <!--  <i v-html="message.Content">John Deo</i>-->
                                <p v-html="message.Content"> </p>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
            <v-layout row wrap>
                      <v-flex xs12>
                        <v-text-field
                          outline
                          clearable
                          placeholder="Type Your Message Here "
                          type="text"
                          v-on:keyup.enter="sendMessage"
                          v-model="content"
                        >

                          <template v-slot:append>
                            <v-fade-transition leave-absolute>
                              <v-progress-circular
                                v-if="loading"
                                size="24"
                                color="info"
                                indeterminate
                              ></v-progress-circular>
                              <img v-else width="24" height="24" src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="">
                            </v-fade-transition>
                          </template>
                          <template v-slot:append-outer>
                            <v-menu
                              style="top: -12px"
                              offset-y
                            >

                            </v-menu>
                          </template>
                        </v-text-field>
                      </v-flex>

                    </v-layout>
      </div>

    </div>
</v-layout>


</body>
</template>

<script>
  import ChatRoom from './ChatRoom.vue'
  import * as firebase from 'firebase'
  import browserCookies from "browser-cookies";
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
    created(){
    },
    mounted () {
      this.fetchMessages((this.$route.params.order_id))
    //  this.$store.dispatch('loadOnlineUsers')
    },
    components: {
      'chatroom': ChatRoom,
    },
    computed: {

      messages () {
        return this.chatMessages
      },
    },
    methods: {
      scrollToEnd: function() {
        var container = this.$el.querySelector("#chat-conversation");
        container.scrollTop = container.scrollHeight;
      },

      sendMessage () {
        if (this.content !== '') {
      const  Message_data = {
        OrderId  : parseInt(this.$route.params.order_id),
        ReceiverId: browserCookies.get("current_receiver"),
        SenderId :  browserCookies.get("user_id"),
        Content : this.content
      }
          this.$store.dispatch('sendMessage', Message_data)
          this.content = '' // Clear after You send the Message
        }
      },

      fetchMessages(orderId) {

        let refmessages = firebase.database().ref('messages').orderByChild('OrderId').equalTo(parseInt(orderId)).limitToLast(20)
        let temp_data = []
        refmessages.on("child_added", function(snapshot) {
          var data = snapshot.val()
          temp_data.push(data)


        })
        this.chatMessages = temp_data
        console.log(this.chatMessages);
        this.scrollToEnd()
      },
      // Messages Left & right
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
      },
      isOrderExist()
      {
        axios
        .get("/api/orders/" + this.$route.params.order_id +  "/showInfo")
        .then(response => {
        });
      }
    }
  }
</script>

<style>
@import "../../assets/courier/css/core.css";
@import "../../assets/courier/css/components.css";
@import "../../assets/courier/css/materialdesignicons.css";
.conversation-text{
  padding-bottom: 10px !important;
}
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
margin-top: 100px;
}
.message_container{
  width: 600px;
  margin-left: 10px;
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
