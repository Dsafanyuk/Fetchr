<template>
  <v-dialog width="570">
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
    </v-card>
  </v-dialog>
</template>

<script>
<<<<<<< HEAD
import axios from "../../axios";
=======
import axios from "axios";
const api = axios.create();
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f

export default {
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
      products: []
    };
  },
  mounted: function() {
<<<<<<< HEAD
    axios.get(`/api/orders/${this.productID}/summary`).then(response => {
=======
    api.get(`/api/orders/${this.productID}/summary`).then(response => {
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
      this.products = response.data.map(product => {
        product.price = "$" + product.price.toFixed(2);
        product.value = false;
        return product;
      });
    });
  }
};
</script>
