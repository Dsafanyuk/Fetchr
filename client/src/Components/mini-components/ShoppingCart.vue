<template>
  <div class="shopping-cart">
   <div class="shopping-cart-header">
     <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">3</span>
     <div class="shopping-cart-total">
       <span class="lighter-text">Total:</span>
       <span class="main-color-text">$2,229.97</span>
     </div>
   </div> <!--end shopping-cart-header -->

   <ul class="shopping-cart-items">
     <CartItems v-for="item in items"> </CartItems>
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
  },
  computed : {
    total (){
      return 0;
    }
  }
};
</script>

<style scoped lang="scss">
@import '../custom_css/ShoppingCart.scss';
</style>
