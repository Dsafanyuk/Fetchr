<template>
  <v-dialog v-model="dialog" width="570">
    <button slot="activator" class="btn btn-outline-dark my-2 my-sm-0" type="button">View</button>
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>Order Summary</v-card-title>
      <v-data-table :headers="headers" :items="products">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.product_name }}</td>
          <td class="text-xs-left">{{ props.item.price }}</td>
          <td class="text-xs-left">{{ props.item.quantity }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-btn color="orange" v-on:click="acceptOrder">Accept</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
      
<script>
  import axios from "axios";
  import browserCookies from "browser-cookies";
  import Toasted from 'vue-toasted';
const api = axios.create();

export default {
  name: 'CourierOrderSummary',
  props: {
    productID: Number
  },
  data() {
    return {
      headers: [
        { text: "Product", align: "left", value: "product_name" },
        { text: "Total", align: "left", value: "price" },
        { text: "Quantity", align: "left", value: "quantity" }
      ],
      products: [],
      dialog: false,
    };
  },
  methods: {
      acceptOrder: function (event) {
          if (event) {
              api.post(`/api/courier/accept`, {
                  courier_id: browserCookies.get("userId"),
                  order_id: this.productID,
              }).then(response => {
                  if (response.data == "success") {
                      this.dialog = false;
                      this.$toasted.show('Order Accepted! Go pick it up plz', {
                          position: "top-center", 
                          duration : 5000
                      });
                  } else {
                      this.$toasted.error('Oops! This order has already been accepted. :(', {
                          position: "top-center", 
                          duration : 5000
                      });
                  } 
              })
          }
      }
  },
  mounted: function() {
    api.get(`/api/orders/${this.productID}/summary`).then(response => {
      this.products = response.data.map(product => {
        product.price = "$" + product.price.toFixed(2);
        product.value = false;
        return product;
      });
    });
  }
};
</script>
