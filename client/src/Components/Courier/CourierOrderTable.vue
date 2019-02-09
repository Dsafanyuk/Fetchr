<template>
  <v-card>
    <v-card-title>
      Available Orders
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="orders" :search="search">
        <template slot="items" slot-scope="props">
          <td>{{props.item.first_name}}</td>
          <td>{{props.item.building}}</td>
          <td>{{props.item.room_num}}</td>
          <td>{{props.item.delivery_status}}</td>
          <td><CourierOrderSummary :orderID="props.item.order_id" :accept=true :deliver=false v-on:accepted="accepted"></CourierOrderSummary></td>
        </template>
    </v-data-table>
  </v-card>
</template>
    
<script>
    import CourierOrderSummary from "../mini-components/Courier/CourierOrderSummary";
    
export default {
  name: "CourierOrderTable",
  data() {
    return {
      headers: [
        { text: "Name", align: "left", value: 'first_name'},
        { text: "Building", align: "left", value: 'building' },
        { text: "Room #", align: "left", value: 'room_num' },
        { text: "Delivery Status", align: "left", value: 'delivery_status' },
        { text: " ", align: "left" },
      ],
      search: '',
    };
  }, 
  props: {
    orders: Array,
  },
  computed: {},
  components: {
    'CourierOrderSummary': CourierOrderSummary,
  },
  methods: {
    accepted() {
      this.$emit('accepted');
    }
  }
};
</script>

<style scoped lang="css">
    .v-datatable{
        margin-top: 200px !important;
    }
</style>
