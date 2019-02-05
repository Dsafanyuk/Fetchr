<template>
  <div class="text-xs-center">
    <v-dialog v-model="show" width="750">
      <v-card>
        <v-card-title
          class="headline justify-center text-xs-center font-weight-bold"
          primary-title
        >Your Shopping Cart</v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          hide-headers
          :total-items="10"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">
              <v-btn icon>
                <v-icon color="primary">remove_circle</v-icon>
              </v-btn>Quantity
              <v-btn icon>
                <v-icon color="primary">add_circle</v-icon>
              </v-btn>
            </td>
            <td class="text-xs-right" :colspan="2">Price</td>
            <td class="text-xs-center">
              <v-btn icon>
                <v-icon color="error">delete_forever</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="footer">
            <td></td>
            <td class="text-xs-right">
              <strong>Total</strong>
            </td>
            <td class="text-xs-left" :colspan="headers.length">$$TOTAL$$</td>
          </template>
        </v-data-table>
        <div class="text-xs-center">
          <v-btn color="gray">Continue Shopping</v-btn>
          <v-btn dark color="green">Checkout &nbsp;&nbsp;
            <v-icon>check</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
  <!-- <div class="shopping-cart">
   <div class="shopping-cart-header">
     <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{nbOfItems}}</span>
     <div class="shopping-cart-total">
       <span class="lighter-text">Total:</span>
       <span class="main-color-text">:${{total}}</span>
     </div>
   </div> 

   <ul class="shopping-cart-items">
     <CartItems v-for="Item in Items" :Item="Item"  :key="Item.product_id"> </CartItems>
   </ul>

   <a v-on:click="checkout" class="button">Checkout</a>
  </div>-->
</template>

<script>
import CartItems from "./CartItems.vue";
import State from "../assets/js/shoppingCartState";
import _ from "lodash";
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      headers: [
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }
      ],
      Items: [],
      total: 0,
      nbOfItems: 0
    };
  },
  created: function loadItems() {
    this.Items = State.data.cart;
    // Set the number of item in the cart
    this.nbOfItems = this.Items.length;

    // Get the current Total
    var currentTotal = this.total;

    this.Items.forEach(function(item) {
      currentTotal = currentTotal + item.price;
    });
    // Update the total
    this.total = Math.floor(currentTotal * 100) / 100;
  },
  methods: {
    checkout: function(event) {
      this.$router.push("/checkout");
    }
  },
  computed: {
    show: {
      get() {
        console.log(`GET constructor ${this.value}`);
        return this.value;
      },
      set(value) {
        console.log(`set constructor ${value}`);

        this.$emit("input", value);
      }
    }
  },
  components: {
    CartItems: CartItems
  }
};
</script>

<style scoped lang="scss">
@import "../custom_css/ShoppingCart.scss";
</style>
