<template>
  <v-data-table
    :items="items"
    :total-items="items.length"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td align="center">
        <img height="100px" :src="props.item.product_url" class="checkout-img">
      </td>
      <td class="body-2">{{ props.item.product_name }}</td>
      <td class="text-xs-left">${{ (props.item.item_total).toFixed(2) }}</td>
      <td class="text-xs-left">{{ props.item.quantity }}</td>
    </template>
    <template slot="footer">
      <td class="text-xs-right" :colspan="2">
        <strong>Total</strong>
      </td>
      <td class="text-xs-left" :colspan="4">${{total.toFixed(2)}}</td>


    </template>
  </v-data-table>

</template>

<script>
import browserCookies from "browser-cookies";
import axios from "../../../axios";

export default {
  data() {
      return {
        items: [],
        total: 0.0,
}
},
computed: {
orderStatus() {
//return this.$store.getters["orders/status"];
},
updatedCourierInfo() {
//return this.$store.getters["orders/info"];
},
},
mounted: function() {
this.getOrderSummary();
},
methods: {
getOrderSummary: function() {
  console.log(" summary Called");
axios
.get(`/api/orders/${this.$route.params.order_id}/summary`)
.then(response => {
  let orderInfo = response.data.orderInfo[0];

  this.items = response.data.productList;
  //this.$store.commit('orders/changeStatus', orderInfo.delivery_status);
  this.items.forEach(item => {
    item.item_total = item.price * item.quantity;
    this.total += item.item_total;
  });
//  this.$store.commit('orders/changeOrder', this.$route.query.order);
  //this.$store.dispatch('orders/getInfo', this.$route.query.order, {root:true})
});
},
}
};
</script>
<style scoped lang="css">

</style>
