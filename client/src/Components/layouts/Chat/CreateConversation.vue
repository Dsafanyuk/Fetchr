<template>
<v-dialog v-model="dialog" persistent max-width="600px">
  <v-btn slot="activator"  @click="ischatexist(order.order_id)" color="primary" dark> Chat </v-btn>
  <v-card>
    <v-card-title>
      <span class="headline"> Write a Message to the Courier </span> </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>

          <v-textarea name="input-7-1" v-model="msg_content" value="" hint="Type Here">
          </v-textarea>
        </v-layout>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer>
      </v-spacer>
      <v-btn color="blue darken-1" flat @click="dialog = false"> Close </v-btn>
      <v-btn color="success" @click="createChat(order.order_id)"> Send </v-btn>
      </v-card-actions> </v-card>
</v-dialog>
</template>
<script>
import browserCookies from "browser-cookies";
import axios from "../../../axios";
import {mapActions} from "vuex";
import * as firebase from 'firebase'

export default {
  data() {
    return {
      orders: {},
      dialog: false,
      msg_content: '',
      user_id: browserCookies.get("user_id"),

    };


  },
  mounted: function() {
    let loadingOrdersToast = this.$toasted.show("Loading orders...");
    axios
      .get("/api/users/" + browserCookies.get("user_id") + "/orders")
      .then(response => {
        this.orders = response.data;
        loadingOrdersToast.text("Orders loaded!").goAway(500);
      })
      .catch(error => {
        if (error.response) {
          console.log(error);
          loadingProductsToast.goAway();
          this.$toasted.error("Something went wrong");
        }
      });
  },
  methods: {
    createChat: function(order_id) {
      axios
      .get("/api/orders/" + order_id)
      .then(response => {
      var receiver_id = response.data[0]['courier_id'];
        this.$store.dispatch('createChat',{message: this.msg_content, sender_id : this.user_id, receiver : receiver_id, or_id : order_id });
        this.$router.push("/chat/" + order_id);
      });

    },
    getCourierId: function(courier_id) {
      return axios
        .get("/api/orders/" + courier_id)
        .then(response => {
          return response.data;
        });
    },
    ischatexist : function (o_id){
      console.log("Is exist Called");
      var isexist = false
      let chatref = firebase.database().ref('messages').orderByChild('OrderId').equalTo(o_id)
      chatref.on("value", function(snapshot) {
      if(snapshot.exists())
          isexist = true
    })
    if(isexist  === true)
      this.$router.push("/chat/"+o_id);
  }

  }
};
</script>
