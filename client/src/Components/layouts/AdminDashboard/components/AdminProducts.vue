<template>
  <v-app>
    <h2 @click="productsPerDay">AdminProducts</h2>
    <h2 @click="ordersPerDay">AdminOrders</h2>
    <h2 @click="prodsSoldByCat">AdminCategories</h2>
  </v-app>
</template>
<script>
import axios from "../../../../axios";

export default {
  data() {
    return {
      orders2d: [],
      prods2d: [],
      catProds2d: [],
      days: [],
      orders: [],
      prods: [],
      categories: [],
      catProds: [],
    }
  },
  methods: {
    ordersPerDay: function() {
      axios
        .get('/api/admin/graphs/ordersPerDay')
        .then((response) => {
          let dayCounts = response.data[0][0];
          this.orders2d = []
          this.days = []
          this.orders = []

          // Two dimensional array
          Object.keys(dayCounts).forEach(day => {
            this.orders2d.push([day, dayCounts[day]])
          })
          console.log(this.orders2d)

          // Two one dimensional arrays
          Object.keys(dayCounts).forEach(day => {
            this.days.push(day)
            this.orders.push(dayCounts[day])
          })
          console.log(this.days)
          console.log(this.orders)
      })
    },
    productsPerDay: function() {
      axios
        .get('/api/admin/graphs/productsPerDay')
        .then((response) => {
          let dayCounts = response.data[0][0];
          this.prods2d = []
          this.days = []
          this.prods = []

          // Two dimensional array
          Object.keys(dayCounts).forEach(day => {
            this.prods2d.push([day, dayCounts[day]])
          })
          console.log(this.prods2d)

          // Two one dimensional arrays
          Object.keys(dayCounts).forEach(day => {
            this.days.push(day)
            this.prods.push(dayCounts[day])
          })
          console.log(this.days)
          console.log(this.prods)
      })
    },
    prodsSoldByCat: function() {
      axios
        .get('/api/admin/graphs/prodsSoldByCat')
        .then((response) => {
          let prodCounts = response.data[0][0][0];
          this.catProds2d = []
          this.categories = []
          this.catProds = []

          // Two dimensional array
          Object.keys(prodCounts).forEach(category => {
            this.catProds2d.push([category, prodCounts[category]])
          })
          console.log(this.catProds2d)

          // Two one dimensional arrays
          Object.keys(prodCounts).forEach(category => {
            this.categories.push(category)
            this.catProds.push(prodCounts[category])
          })
          console.log(this.categories)
          console.log(this.catProds)
      })
    }
  },
}
</script>
