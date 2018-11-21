<template>
  <li class="clearfix">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
    <span class="item-name">{{Item.item_name}}</span>
    <span class="item-price">{{Item.item_price}}</span>
    <span class="item-quantity">{{Item.item_quantity}}</span>
  </li>
</template>
<script>


export default {
  props: {
    Item : {
      item_name     : String,
      item_price    : Number,
      item_quantity : Number,

    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
  @import '../custom_css/ShoppingCart.scss';
</style>
