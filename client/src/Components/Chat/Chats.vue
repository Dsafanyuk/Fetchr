<template>
  <v-list subheader>
    <v-subheader>Recent Chats</v-subheader>
    <v-list-tile avatar v-for="(chat, index) in chats" v-bind:key="chat.order_id" @click="loadChatRoom(chat.order_id,chat.receiver_id)" >

      <v-list-tile-content>
        <v-list-tile-title >{{chat.userInfo}}</v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action>
        <v-icon>chat_bubble</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
  import browserCookies from "browser-cookies";
  import axios from "../../axios";
  export default{
    data () {
      return {
        recentChats: 'Recent Chats',
        orders : {}
      }
    },
    created () {
      // Get all the orderId where the current user is involved
      axios
        .get("/api/users/" + browserCookies.get("user_id") + "/orders")
        .then(response => {
          this.$store.dispatch ('loadChats', {orders : response.data})
        });

    },
    computed: {
      chats () {
        console.log(this.$store.getters.chats);
        return  this.$store.getters.chats

      }
    },
    methods :{
      loadChatRoom: function(or_id, r_id) {
        const chatData = {
          OrderId: or_id,
          ReceiverId: r_id
        }
        this.$emit("showRoom", chatData)

      }


    }
  }
</script>
