<template>
  <v-app>
    <LandingHeader></LandingHeader>
    <div class="checkout">
      <h3>Checkout</h3>
      <v-data-table :items="items" hide-headers>
        <template slot="items" slot-scope="props">
          <td align="center">
            <img :src="props.item.product_url">
          </td>
          <td>{{ props.item.product_name }}</td>
          <td class="text-xs-left">${{ (props.item.price*props.item.quantity).toFixed(2) }}</td>
          <td class="text-xs-left">
            <v-btn icon v-on:click="decQuantity(props.item)">
              <v-icon color="primary">remove_circle</v-icon>
            </v-btn>
            {{ props.item.quantity }}
            <v-btn icon v-on:click="incQuantity(props.item)">
              <v-icon color="primary">add_circle</v-icon>
            </v-btn>
          </td>
          <td>
            <v-btn icon v-on:click="removeItem(props.item)">
              <v-icon color="error">delete_forever</v-icon>
            </v-btn>
          </td>
        </template>
        <template slot="footer">
          <td></td>
          <td class="text-xs-right">
            <strong>Total</strong>
          </td>
          <td class="text-xs-left" :colspan="4">{{total}}</td>
        </template>
      </v-data-table>
      <div class="submitOrderButton text-xs-center">
        <v-btn
          v-if="sufficientFunds == true && this.items.length"
          type="submit"
          v-on:click="checkout"
        >Submit Order</v-btn>
        <div v-else-if="sufficientFunds == false" class="text-xs-center">
          <v-alert outline :value="true" type="warning">
            <strong>Insufficient Funds:</strong>
            <br>
            <h4>{{walletBalance}}</h4>
            <v-btn
              type="submit"
              color="success"
              v-on:click="showWallet(true)"
            >Refill Wallet &nbsp;&nbsp;
              <v-icon>fas fa-money-bill-wave</v-icon>
            </v-btn>
          </v-alert>
        </div>
      </div>
    </div>
    <LandingFooter></LandingFooter>
  </v-app>
</template>
    
    <script>
import LandingHeader from "./mini-components/LandingHeader.vue";
import LandingFooter from "./mini-components/LandingFooter.vue";
import browserCookies from "browser-cookies";
import axios from "axios";
import { mapState, mapActions, mapGetters } from "vuex";

const api = axios.create();

export default {
  data() {
    return {};
  },
  // Returns an array of objects
  computed: {
    ...mapGetters("cart", {
      items: "cartItems",
      total: "totalCartPrice"
    }),
    ...mapGetters("wallet", {
      walletBalance: "walletBalance"
    }),
    // items: function() {
    //   return this.$store.getters.cartItems;
    // },
    // total: function() {
    //   return this.$store.getters.totalCartPrice;
    // },
    // walletBalance: function() {
    //   return this.$store.getters.walletBalance;
    // },
    sufficientFunds: function() {
      if (parseFloat(this.walletBalance, 10) >= parseFloat(this.total, 10)) {
        console.log(this.walletBalance, 10);
        console.log(this.total);
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    checkout: function(event) {
      let router = this.$router;
      let productsWithQuantity = [];
      this.items.map(product => {
        //put all the products into a json array
        productsWithQuantity.push({
          product_id: product.product_id,
          quantity: product.quantity
        });
      });
      this.$store.dispatch("wallet/getWalletBalance");
      if (this.sufficientFunds) {
        api
          .post("/api/orders/", {
            customer_id: browserCookies.get("user_id"),
            delivery_status: "pending",
            order_total: this.$store.getters["cart/totalCartPrice"],
            productsWithQuantity: productsWithQuantity
          })
          .then(function(response) {
            console.log(response.data);
            //go to the confirmation page and send it the order id
            router.push("/confirmation?order=" + response.data.message);
          });
      } else {
        console.log("not enough money");
      }
    },
    // Remove an item from cart
    removeItem: function(product) {
      this.$store.commit("cart/removeItem", product);
    },
    // Increase quantity for a product
    incQuantity: function(product) {
      this.$store.commit("cart/incQuantity", product);
    },
    // Decrease quantity for a product
    decQuantity: function(product) {
      if (product.quantity > 1) {
        this.$store.commit("cart/decQuantity", product);
      }
    },
    showWallet: function(value) {
      this.$store.commit("wallet/toggleWallet", value);
    }
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter
  }
};
</script>
    
    <style scoped lang="css" src='./custom_css/checkout.css'>
</style>
    
