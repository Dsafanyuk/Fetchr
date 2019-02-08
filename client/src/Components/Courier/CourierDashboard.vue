<template>

  <body>
    <CourierHeader> </CourierHeader>
    <CourierSummaryCard class="summarycard"> </CourierSummaryCard>
    <v-app>
      <button type="button" v-on:click="getAvailableOrders">Refresh Available Orders</button>
      <CourierOrderTable :orders="orders" ></CourierOrderTable>
      <button type="button" v-on:click="getAcceptedOrders">Refresh Accepted Orders</button>
      <CourierAcceptedOrders :orders="acceptedOrders" ></CourierAcceptedOrders>
    </v-app>
  </body>



</template>

<script>
  import  CourierHeader from "../mini-components/Courier/CourierHeader.vue";
  import  CourierSummaryCard from "../mini-components/Courier/CourierSummaryCard.vue";
  import  CourierOrderTable from "./CourierOrderTable";
  import  CourierAcceptedOrders from "./CourierAcceptedOrders";
  import browserCookies from "browser-cookies";
  import Toasted from 'vue-toasted';
  import axios from "axios";
  const api = axios.create();
  const user = browserCookies.get("user_id");

  export default {
    data() {
      return {
        orders: [],
        acceptedOrders: [],
        buildings: [
          'Ballard',
          'Coberly',
          'Griffith',
          'Dixon',
          'Bradley',
          'Young'
        ],
      };
    },
    components: {
      CourierHeader          : CourierHeader,
      CourierSummaryCard     : CourierSummaryCard ,
      CourierOrderTable      : CourierOrderTable,
      CourierAcceptedOrders  : CourierAcceptedOrders,
    },
    methods: {
      getAcceptedOrders() {
        let loadingOrdersToast = this.$toasted.show("Loading orders...");
        api
          .get(`/api/courier/` + user + `/acceptedOrders`)
          .then(response => { 
            this.acceptedOrders = response.data.map((order) => {
              order.building = this.buildings[order.room_num.slice(0, 1) - 1];
              return order;
            });
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log(error)
              console.log("Error", error.message);
            }
            loadingOrdersToast.goAway();
            this.$toasted.error("Something went wrong");
          });
      },
      getAvailableOrders() {
        let loadingOrdersToast = this.$toasted.show("Loading orders...");
        api
          .get(`/api/courier/` + user + `/order`)
          .then(response => {
            this.orders = response.data.map((order) => {
              order.building = this.buildings[order.room_num.slice(0, 1) - 1];
              return order;
            });
            loadingOrdersToast.text("orders loaded!").goAway(5000);
          })
          .catch(error => {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            loadingOrdersToast.goAway();
            this.$toasted.error("Something went wrong");
          });
      },
    }
  };
</script>

<style scoped="true">
.summarycard{
  margin-top: 100px;
}

</style>
