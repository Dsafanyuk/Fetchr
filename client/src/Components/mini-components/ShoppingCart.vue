<template>
  <div class="shopping-cart">


   <ul class="shopping-cart-items">
     <CartItems></CartItems>
     <CartItems></CartItems>

   </ul>

   <a href="#" class="button">Checkout</a>
 </div>
</template>

<script>
import CartItems from './CartItems.vue'

export default {

  data() {
    return {
      Items : {},
    };
  },
  components: {
    CartItems : CartItems,
  }
};
</script>

<style scoped lang="scss">
@import '../custom_css/ShoppingCart.scss';
</style>
