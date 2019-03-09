<template>
  <v-list subheader>
    <v-subheader>Recent Chats</v-subheader>
    <v-list-tile avatar v-for="(chat, index) in chats" v-bind:key="chat.order_id" @click="" :to="/chat/ + chat.order_id">

      <v-list-tile-content>
        <v-list-tile-title >{{getNameByUserId(chat.sender_id)}}</v-list-tile-title>
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
        UserInfo : "",
        orders : {}
      }
    },
    created () {
      axios
        .get("/api/users/" + browserCookies.get("user_id") + "/orders")
        .then(response => {
          this.$store.dispatch ('loadChats', {orders : response.data})
        });

    },
    computed: {
      chats () {

     return  this.$store.getters.chats

      }
    },
    methods :{
      getNameByUserId : function (user_id)
      {

          axios
          .get("/api/users/" + user_id +  "/showInfo")
          .then(response => {
         console.log( response.data[0]['first_name'] + " " + response.data[0]['last_name'])
          });

      }

    }
  }
</script>
