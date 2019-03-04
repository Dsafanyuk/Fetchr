<template>
  <v-app>
    <LandingHeader></LandingHeader>
    <div class="checkout">
      <h3>Checkout</h3>
<<<<<<< HEAD
      <v-layout row>
        <v-flex md8>
          <v-data-table
            :items="items"
            hide-headers
            :total-items="items.length"
            hide-actions
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
              <td align="center">
                <img :src="props.item.product_url" class="checkout-img">
              </td>
              <td class="body-2">{{ props.item.product_name }}</td>
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
              <td class="text-xs-right" :colspan="2">
                <strong>Total</strong>
              </td>
              <td class="text-xs-left" :colspan="4">{{total}}</td>
            </template>
          </v-data-table>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex md3>
          <v-card>
            <div
              class="submitOrderButton text-xs-center"
              v-if="sufficientFunds == true && items.length"
            >
              <v-alert outline :value="true" type="success">
                <h4>Ready to Order!</h4>
                <br>
                <strong>Remaing Balance after order:</strong>
                <h5>{{walletAfterTransaction}}</h5>
                <v-btn type="submit" v-on:click="checkout" color="accent">Submit Order</v-btn>
              </v-alert>
            </div>
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
          </v-card>
        </v-flex>
      </v-layout>
=======
      <v-data-table :headers="headers" :items="products">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.product_name }}</td>
          <td class="text-xs-left">${{ props.item.price }}</td>
          <td class="text-xs-left">{{ props.item.quantity }}</td>
        </template>
      </v-data-table>
      <div class="submitOrderButton">
        <button
          class="btn btn-outline-dark my-2 my-sm-0"
          type="submit"
          v-on:click="checkout"
        >Submit Order</button>
      </div>
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    </div>
    <LandingFooter></LandingFooter>
  </v-app>
</template>
    
    <script>
import LandingHeader from "./mini-components/LandingHeader.vue";
import LandingFooter from "./mini-components/LandingFooter.vue";
import browserCookies from "browser-cookies";
<<<<<<< HEAD
import axios from "../axios";
import { mapState, mapActions, mapGetters } from "vuex";

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
    walletAfterTransaction: function() {
      let balance = this.walletBalance - this.total;
      return balance.toFixed(2);
    },
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
      let socket = this.$socket;
      let router = this.$router;
      let productsWithQuantity = [];
      this.items.map(product => {
=======
import axios from "axios";
import State from "./assets/js/shoppingCartState";

const api = axios.create();

export default {
  data() {
    name: return {
      products: [],
      headers: [
        { text: "Name", align: "left", value: "product_name" },
        { text: "Price", align: "left", value: "price" },
        { text: "Quantity", align: "left", value: "quantity" }
      ],
      //This is the products recieved from cart
      productsReceived: []
    };
  },
  mounted: function() {
    this.productsReceived = State.data.cart;
    //setting prods in table
    this.products = this.productsReceived.map(product => {
      //put price in right format
      product.price = product.price.toFixed(2);
      //this is for the v-data-table
      product.value = false;
      product.quantity = 1;
      return product;
    });
  },
  methods: {
    checkout: function(event) {
      let router = this.$router;

      let total = 0;
      let productsWithQuantity = [];
      this.productsReceived.map(product => {
        //get the total of the products for the order
        total += parseFloat(product.price);
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
        //put all the products into a json array
        productsWithQuantity.push({
          product_id: product.product_id,
          quantity: product.quantity
        });
      });
<<<<<<< HEAD
      this.$store.dispatch("wallet/getWalletBalance");
      if (this.sufficientFunds) {
        axios
          .post("/api/orders/", {
            customer_id: browserCookies.get("user_id"),
            delivery_status: "pending",
            order_total: this.$store.getters["cart/totalCartPrice"],
            productsWithQuantity: productsWithQuantity
          })
          .then(function(response) {
            socket.emit("ORDER_CREATED");
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
=======
      api
        .post("/api/orders/", {
          customer_id: browserCookies.get("userId"),
          delivery_status: "pending",
          order_total: total,
          productsWithQuantity: productsWithQuantity
        })
        .then(function(response) {
          //go to the confirmation page and send it the order id
          router.push("/confirmation?order=" + response.data.message);
        })
        .catch(function(response) {
          console.log(response);
        });
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    }
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter
  }
};
</script>
<<<<<<< HEAD
=======
    
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    <style scoped lang="css" src='./custom_css/checkout.css'>
</style>
    
