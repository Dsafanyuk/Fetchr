<template>
  <v-app>
    <LandingHeader>
    </LandingHeader>
    <div class="orders">
      <h3>Recent Orders</h3>
      <table class="order table-responsive-md">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.order_id">
            <td>{{order.order_id}}</td>
            <td>{{fixDate(order.time_created)}}</td>
            <td>{{order.delivery_status}}</td>
            <td>${{order.order_total.toFixed(2)}}</td>
            <td>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <v-btn slot="activator" color="primary" dark> Chat </v-btn>
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
            </td>
            <td>
                <button @click="viewOrder(order.order_id)" class="btn btn-outline-dark my-2 my-sm-0" type="button">View</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <LandingFooter>
</LandingFooter>
  </v-app>
</template>
<script>
import LandingHeader from "./mini-components/LandingHeader.vue";
import LandingFooter from "./mini-components/LandingFooter.vue";
import OrderSummary from "./mini-components/OrderSummary.vue";
import browserCookies from "browser-cookies";
import axios from "../axios";
import {mapActions} from "vuex";

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
    axios
      .get("/api/users/" + browserCookies.get("user_id") + "/orders")
      .then(response => {
        this.orders = response.data;
      });
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter,
    OrderSummary: OrderSummary
  },
  methods: {
    fixDate: function(date) {
      date = new Date(date);
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      let goodDate =
        months[date.getMonth()] +
        " " +
        date.getDate() +
        ", " +
        date.getFullYear();
      return goodDate;
    },
    createChat: function(order_id) {
      axios
      .get("/api/orders/" + order_id)
      .then(response => {
      var receiver_id = response.data[0]['courier_id'];
        this.$store.dispatch('createChat',{message: this.msg_content, sender_id : this.user_id, receiver : receiver_id, or_id : order_id });
        this.$router.push("/chat");
      });

    },
    getCourierId: function(courier_id) {
      return axios
        .get("/api/orders/" + courier_id)
        .then(response => {
          return response.data;
        });
    }

  }
};
</script>
<style scoped lang="css" src='./custom_css/orders.css'>
</style>
