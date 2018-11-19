<template>
<v-app>
<LandingHeader></LandingHeader>
    <div class="orders">
        <h3>Recent Orders</h3>
        <table class="table-responsive-md">
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
                <tr v-for="order in orders">
                    <td>{{order.order_id}}</td>
                    <td>{{fixDate(order.time_created)}}</td>
                    <td>{{order.delivery_status}}</td>
                    <td>${{order.order_total.toFixed(2)}}</td>
                    <td>
                        <OrderSummary :productID=order.order_id></OrderSummary>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
<LandingFooter></LandingFooter>
</v-app>
</template>

<script>
import LandingHeader from './mini-components/LandingHeader.vue';
import LandingFooter from './mini-components/LandingFooter.vue';
import OrderSummary from './mini-components/OrderSummary.vue';
import axios from 'axios';

export default {

  data () {
    name: 
    return {
        orders: {},
    };
  },
  mounted: function() {
    axios.get('http://localhost:3000/api/users/1/orders').then((response) => {
      this.orders = response.data;
    });
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter,
    OrderSummary: OrderSummary,
  },
  methods: {
    fixDate: function(date) {
        date = new Date(date);
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        let goodDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
        return goodDate
    },
  }
}

</script>

<style>
    thead tr {
        border: 1px solid black;
    }

    th, td {
        padding: 15px;
        text-align: left;
    }
    
    tbody tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
    
    tbody tr:nth-child(even) {
        background-color: #F0FFF0;
    }

    table {
        width: 70%;
    }

    .orders {
        padding-top: 3em;
        padding-bottom: 3em;
        padding-left: 10em;
    }
</style>
