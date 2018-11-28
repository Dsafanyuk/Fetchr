<template>
  <div class="shopping-cart">
   <div class="shopping-cart-header">
     <i class="fa fa-shopping-cart cart-icon"></i><span class="badge">{{nbOfItems}}</span>
     <div class="shopping-cart-total">
       <span class="lighter-text">Total:</span>
       <span class="main-color-text">:${{total}}</span>
     </div>
   </div> <!--end shopping-cart-header -->

   <ul class="shopping-cart-items">
     <CartItems v-for="Item in Items" :Item="Item"  :key="Item.product_id"> </CartItems>
   </ul>

   <a href="#" class="button">Checkout</a>
 </div>
</template>

<script>
import CartItems from './CartItems.vue'
import State from '../assets/js/shoppingCartState'
import _ from 'lodash'
export default {

  data() {
    return {
      Items : [],
      total: 0,
      nbOfItems : 0,
              };
  },
  created: function loadItems(){
    this.Items = State.data.cart;
    this.nbOfItems = this.Items.length;
    //if (this.nbOfItems === 0)

  },
  components: {
    CartItems : CartItems,
  },
  computed : {
    total (){
      return _.sumBy(this.Items, function(Item) {
           this.total = (Item.price * Item.qty);
    })
  }
}
};
</script>

<style scoped lang="scss">
@import '../custom_css/ShoppingCart.scss';
</style>
