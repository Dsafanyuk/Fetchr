<template>
  <div class="shopping-cart">


   <ul class="shopping-cart-items">
     <li class="clearfix">
       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
       <span class="item-name">Sony DSC-RX100M III</span>
       <span class="item-price">$849.99</span>
       <span class="item-quantity">Quantity: 01</span>
     </li>

     <li class="clearfix">
       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
       <span class="item-name">KS Automatic Mechanic...</span>
       <span class="item-price">$1,249.99</span>
       <span class="item-quantity">Quantity: 01</span>
     </li>

     <li class="clearfix">
       <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
       <span class="item-name">Kindle, 6" Glare-Free To...</span>
       <span class="item-price">$129.99</span>
       <span class="item-quantity">Quantity: 01</span>
     </li>
   </ul>

   <a href="#" class="button">Checkout</a>
 </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
@import '../custom_css/ShoppingCart.scss';
</style>
