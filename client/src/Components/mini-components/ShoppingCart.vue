<template>
  <div class="shopping-cart">
    <div class="shopping-cart-header">
      <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{numberOfItems}}</span>
      <div class="shopping-cart-total">
        <span class="lighter-text">Total:</span>
        <span class="main-color-text">:${{total}}</span>
      </div>
    </div>
    <!--end shopping-cart-header -->

    <ul class="shopping-cart-items">
      <CartItems v-for="item in items" :item="item" :key="item.product_id"> </CartItems>
    </ul>

    <a v-on:click="checkout" class="button">Checkout</a>
  </div>
</template>

<script>
  import CartItems from './CartItems.vue'
  import State from '../assets/js/shoppingCartState'
  import _ from 'lodash'
  export default {

    data() {
      return {
      };
    },
    computed: {
      // Return all items in the cart
      items: function() {
        return this.$store.getters.cartItems
      },
      // Return total price in the cart
      total: function() {
        return this.$store.getters.totalCartPrice
      },
      // Return number of items
      numberOfItems: function () {
        return this.$store.getters.totalCartItems
      },
    },
    methods: {
      checkout: function (event) {
        this.$router.push('/checkout');
      }
    },
    components: {
      CartItems: CartItems,
    }

  };
</script>

<style scoped lang="scss">
  @import '../custom_css/ShoppingCart.scss';
</style>