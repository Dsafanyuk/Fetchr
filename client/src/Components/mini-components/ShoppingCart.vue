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
          :items="items"
          hide-headers
          :total-items="10"
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.product_name }}</td>
            <td class="text-xs-right">
              <v-btn icon v-on:click="decQuantity(props.item)">
                <v-icon color="primary">remove_circle</v-icon>
              </v-btn>{{ props.item.quantity }}
              <v-btn icon v-on:click="incQuantity(props.item)">
                <v-icon color="primary">add_circle</v-icon>
              </v-btn>
            </td>
            <td class="text-xs-right" :colspan="2">{{ (props.item.price * props.item.quantity).toFixed(2) }}</td>
            <td class="text-xs-center">
              <v-btn icon v-on:click="removeItem(props.item)">
                <v-icon color="error">delete_forever</v-icon>
              </v-btn>
            </td>
          </template>
          <template slot="footer">
            <td></td>
            <td class="text-xs-right">
              <strong>Total</strong>
            </td>
            <td class="text-xs-left" :colspan="headers.length">{{total}}</td>
          </template>
        </v-data-table>
        <div class="text-xs-center">
          <v-btn color="gray">Continue Shopping</v-btn>
          <v-btn v-on:click="checkout" dark color="green">Checkout &nbsp;&nbsp;
            <v-icon>check</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
      nbOfItems: 0
    };
  },
  computed: {
    // Return all items in the cart
    items: function() {
      return this.$store.getters.cartItems
    },
    // Return total price in the cart
    total: function() {
      return this.$store.getters.totalCartPrice;
    },
    // Return number of items
    numberOfItems: function() {
      return this.$store.getters.totalCartItems;
    },
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
  methods: {
    // Go to checkout page
    checkout: function(event) {
      this.$router.push("/checkout");
    },
    // Increase quantity for a product
    incQuantity: function (product) {
      this.$store.commit("incQuantity", product);
    },
    // Decrease quantity for a product
    decQuantity: function (product) {
      if(product.quantity > 1) {
        this.$store.commit("decQuantity", product);
      }
    },
    // Remove a product from cart
    removeItem: function (product) {
      this.$store.commit("removeItem", product);
    },
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "../custom_css/ShoppingCart.scss";
</style>
