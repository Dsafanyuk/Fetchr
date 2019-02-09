<template>
  <v-app>
    <LandingHeader></LandingHeader>
    <div class="checkout">
      <h3>Checkout</h3>
      <v-data-table :headers="headers" :items="items">
        <template slot="items" slot-scope="props">
          <td align="center"><img :src="props.item.product_url" style="width:20%; height:250%;"></td>
          <td>{{ props.item.product_name }}</td>
          <td class="text-xs-left">${{ (props.item.price*props.item.quantity).toFixed(2) }}</td>
          <td class="text-xs-left">{{ props.item.quantity }}</td>
          <td>
            <v-btn icon v-on:click="removeItem(props.item)">
              <v-icon color="error">delete_forever</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
      <div class="submitOrderButton">
        <button
          class="btn btn-outline-dark my-2 my-sm-0"
          type="submit"
          v-on:click="checkout"
        >Submit Order</button>
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
import State from "./assets/js/shoppingCartState";

const api = axios.create();

export default {
  data() {
    name: return {
      products: [],
      headers: [
        { text: "", align: "center"},
        { text: "Name", align: "left", value: "product_name" },
        { text: "Price", align: "left", value: "price" },
        { text: "Quantity", align: "left", value: "quantity" },
        { text: "Remove", align:"left"}
      ],
      //This is the products recieved from cart
      productsReceived: []
    };
  },
  // Returns an array of objects
  computed: {
    items: function() {
      return this.$store.getters.cartItems
    }
  },
  methods: {
    checkout: function(event) {
      let router = this.$router;
      let total = 0;
      let productsWithQuantity = [];

      this.$store.getters.cartItems.map(product => {

        //put all the products into a json array
        productsWithQuantity.push({
          product_id: product.product_id,
          quantity: product.quantity
        });
      });
      api
        .post("/api/orders/", {
          customer_id: browserCookies.get("user_id"),
          delivery_status: "pending",
          order_total: this.$store.getters.totalCartPrice,
          productsWithQuantity: productsWithQuantity
        })
        .then(function(response) {
          //go to the confirmation page and send it the order id
          router.push("/confirmation?order=" + response.data.message);
        })
        .catch(function(response) {
          console.log(response);
        });
    },
    // Remove an item from cart
    removeItem: function (product) {
      this.$store.commit("removeItem", product);
    },
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter
  }
};
</script>
    
    <style scoped lang="css" src='./custom_css/checkout.css'>
</style>
    
