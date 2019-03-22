<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap align-center justify-space-around>
      <v-flex xs3 v-for="(card, i) in cards" :key="i">
        <v-card class="accent lighten--2">
          <v-container>
            <v-layout>
              <v-flex xs2>
                <v-icon dark size="42">{{card.icon}}</v-icon>
              </v-flex>
              <v-flex text-lg-right class="white--text">
                <h1>{{card.statValue}}</h1>
                <span>{{card.text}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-layout row wrap>
        <v-flex>
          <v-card class="leftCards">
            <v-card-title>
              <span class="headline">Courier Quick Look</span>
            </v-card-title>
            <v-data-table :items="couriers" :headers="courierHeader" hide-actions class="elevation-1">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.first_name }} {{ props.item.last_name}}</td>
                <td class="text-xs-right">{{ props.item.in_progress }}</td>
                <td class="text-xs-right">{{ props.item.delivered }}</td>
              </template>
            </v-data-table>
          </v-card>
          <v-card class="leftCards">
            <v-card-title>
              <span class="headline">Recent Orders</span>
            </v-card-title>
            <v-data-table :items="orders" hide-actions hide-headers class="elevation-1">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.order_id }} - {{ props.item.first_name }} {{ props.item.last_name }}</td>
                <td class="text-xs-right">$ {{ props.item.order_total }}</td>
              </template>
            </v-data-table>
          </v-card>
        </v-flex>
      </v-layout>
      <v-flex xs5>
        <v-card>
          <v-card-title>
            <span class="headline">Products Sold by Category</span>
          </v-card-title>
          <apexchart
            type="pie"
            height="420"
            :options="chartOptions"
            :series="series"
            class="chart elevation-1"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "../../../../axios";

export default {
  data() {
    return {
        series: [],
 

      chartOptions: {
        labels: [],
        chart: {
          id: "chart"
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: "bottom",
          horizontalAlign: "center",
          floating: false,
          fontSize: "14px"
        },
        responsive: [
          {
            breakpoint: 480
          }
        ]
      },
      courierHeader: [
        { text: "Name", align: "left", value: "name" },
        { text: "In-Progress", align: "left", value: "in_progress" },
        { text: "Delivered", align: "left", value: "delivered" }
      ],
      cards: [
        // These need to stay in the same order or changed the methods that fill them
        { text: "Total Orders", icon: "shopping_basket", statValue: "" },
        { text: "Total Delivered", icon: "how_to_reg", statValue: "" },
        { text: "Total Users", icon: "group", statValue: "" },
        { text: "Total Amount Ordered", icon: "attach_money", statValue: "" }
      ],
      orders: [],
      couriers: []
    };
  },
  created: function() {
      axios
        .get('/api/admin/graphs/prodsSoldByCat')
        .then((response) => {
          let prodCounts = response.data[0][0][0];

          // Two one dimensional arrays
          Object.keys(prodCounts).forEach(category => {
            this.chartOptions.labels.push(category.replace('_', ' '))
            this.series.push(prodCounts[category])
          })
      })
  },
  mounted: function() {
    this.totalOrders();
    this.totalDelivered();
    this.totalUsers();
    this.totalAmountOrdered();
    this.topThreeCouriers();
    this.recentOrders();
  },
  methods: {
    totalOrders: function() {
      axios
        .get('/api/admin/total/orders')
        .then(response => {
          this.cards[0].statValue = response.data[0][0].total;
        })
    },
    totalDelivered: function() {
      axios
        .get('/api/admin/total/delivered')
        .then(response => {
          this.cards[1].statValue = response.data[0][0].total;
        })
    },
    totalUsers: function() {
      axios
        .get('/api/admin/total/users')
        .then(response => {
          this.cards[2].statValue = response.data[0][0].total;
        })
    },
    totalAmountOrdered: function() {
      axios
        .get('/api/admin/total/amountOrdered')
        .then(response => {
          this.cards[3].statValue = response.data[0][0].total;
        })
    },
    topThreeCouriers: function() {
      axios
        .get('/api/admin/couriers/topThree')
        .then(response => {
          this.couriers = response.data[0]
        })
    },
    recentOrders: function() {
      axios
        .get('/api/admin/orders/recent')
        .then(response => {
          this.orders = response.data[0]
        })
    },
  },
};
</script>

<style>
.apexcharts-canvas {
  margin: 0 auto;
}
.leftCards {
  margin: 8px 7px 16px;
}
</style>
