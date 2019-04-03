<template>
  <v-app>
    <CourierOrderSummary
      v-if="summaryOrder.order_id"
      :selectedOrder="summaryOrder"
      :summaryIsActive="summaryIsActive"
      v-model="summaryIsActive"
      @closeDialog="summaryIsActive"
    ></CourierOrderSummary>
    <CourierSummaryCard class="summarycard"></CourierSummaryCard>

    <!-- MOBILE AND TABLETS -->
    <div class="hidden-lg-and-up row">
      <div class="col-md-10 offset-md-1 col-sm-5">
        <v-tabs height="80px" centered light show-arrows grow v-model.lazy="active" mandatory>
          <v-tabs-slider color="accent"></v-tabs-slider>
          <v-tab href="#baby1">Available({{available_orders}})</v-tab>
          <v-tab href="#baby2">Accepted({{accepted_orders}})</v-tab>
          <v-tab href="#baby3">Delivered({{delivered_orders}})</v-tab>
          <v-tab-item v-for="i in 3" :key="i" :value="'baby' + i">
            <CourierAvailableOrders
              v-if="i == 1"
              :orders="availableOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierAvailableOrders>
            <CourierAcceptedOrders
              v-if="i == 2"
              :orders="acceptedOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierAcceptedOrders>
            <CourierDeliveredOrders
              v-if="i == 3"
              :orders="deliveredOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierDeliveredOrders>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>

    <!-- Computers -->
    <div class="row hidden-md-and-down">
      <div class="col-lg-10 offset-lg-1">
        <v-tabs
          height="80px"
          centered
          light
          show-arrows
          grow
          v-model="active"
          class="shadow-lg"
          mandatory
        >
          <v-tabs-slider color="accent"></v-tabs-slider>
          <v-tab href="#baby1">Available({{available_orders}})</v-tab>
          <v-tab href="#baby2">Accepted({{accepted_orders}})</v-tab>
          <v-tab href="#baby3">Delivered({{delivered_orders}})</v-tab>
          <v-tab-item v-for="i in 3" :key="i" :value="'baby' + i">
            <CourierAvailableOrders
              v-if="i == 1"
              :orders="availableOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierAvailableOrders>
            <CourierAcceptedOrders
              v-if="i == 2"
              :orders="acceptedOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierAcceptedOrders>
            <CourierDeliveredOrders
              v-if="i == 3"
              :orders="deliveredOrders"
              @toggleSummary="toggleOrderSummary"
            ></CourierDeliveredOrders>
          </v-tab-item>
        </v-tabs>
      </div>
    </div>
  </v-app>
</template>

<script>
import CourierOrderSummary from "./CourierOrderSummary";
import CourierDeliveredOrders from "./CourierDeliveredOrders";
import CourierSummaryCard from "./CourierSummaryCard.vue";
import CourierAvailableOrders from "./CourierAvailableOrders";
import CourierAcceptedOrders from "./CourierAcceptedOrders";
import browserCookies from "browser-cookies";
import Toasted from "vue-toasted";
import axios from "../../../../axios";
const user = browserCookies.get("user_id");

export default {
  data() {
    return {
      active: "baby1",
      summaryOrder: {},
      summaryIsActive: false,
      available_orders: 0,
      delivered_orders: 0,
      accepted_orders: 0,
      revenue: 0,
    };
  },
  components: {
    CourierSummaryCard: CourierSummaryCard,
    CourierAvailableOrders: CourierAvailableOrders,
    CourierAcceptedOrders: CourierAcceptedOrders,
    CourierDeliveredOrders: CourierDeliveredOrders,
    CourierOrderSummary: CourierOrderSummary
  },
  created: function clearOrders() {
    this.$store.dispatch("courier/clearAllOrders");
  },
  mounted: function loadOrder() {
    this.$store.commit('courier/startLoading');
    this.getAvailableOrders();
    this.getAcceptedOrders();
    this.getDeliveredOrders();
    this.getTotalDelivered();
  },
  computed: {
    availableOrders() {
      return this.$store.getters["courier/availableOrders"];
    },
    deliveredOrders() {
      return this.$store.getters["courier/deliveredOrders"];
    },
    acceptedOrders() {
      return this.$store.getters["courier/acceptedOrders"];
    }
  },
  
  methods: {
    toggleOrderSummary(value) {
      if (value) this.summaryOrder = value;
      else this.summaryOrder = "";

      if (this.toggleSummary) this.summaryIsActive = false;
      else this.summaryIsActive = true;
    },
    getDeliveredOrders() {
      this.$store.dispatch("courier/getDeliveredOrders");
    },
    getAcceptedOrders() {
      this.$store.dispatch("courier/getAcceptedOrders");
         axios
        .get("/api/courier/" + user + "/countAcceptedOrder")
        .then(response => {
          this.accepted_orders = response.data[0][0]["count_acc"];
        });
    },
    getAvailableOrders() {
      this.$store.dispatch("courier/getAvailableOrders");
       axios
        .get("/api/courier/" + user + "/countAvailableOrder")
        .then(response => {
          this.available_orders = response.data[0][0]["count_av"];
        });
    },
    getTotalDelivered() {
      axios
        .get("/api/courier/" + user + "/getTotalDelivered")
        .then(response => {
          this.delivered_orders = response.data[0][0]["count_d"];
        });
    },
  }
};
</script>

<style scoped="true">
.v-tabs__container--icons-and-text {
  height: 79px !important;
}
.summarycard {
  margin-top: 1%;
}
</style>
