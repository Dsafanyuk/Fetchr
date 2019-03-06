<template>
  <v-list subheader>
    <v-subheader>Recent Chats</v-subheader>
    <v-list-tile avatar v-for="(chat, index) in chats" v-bind:key="chat.order_id" @click="" :to="/chat/ + index">
      <v-list-tile-content>
        <v-list-tile-title v-html="chat.order_id"></v-list-tile-title>
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
      axios
        .get("/api/users/" + browserCookies.get("user_id") + "/orders")
        .then(response => {
          this.$store.dispatch ('loadChats', {orders : response.data})
        });

    },
    computed: {
      chats () {
        return this.$store.getters.chats
      }
    }
  }
</script>
