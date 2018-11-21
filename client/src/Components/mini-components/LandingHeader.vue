<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="custom_url col-md-4 navbar-nav  mt-2 ">
          <li class="nav-item active">
            <img src="https://s3.us-east-2.amazonaws.com/fetchrapp/Logo.png" width="80" height="80" class="d-inline-block align-top" align= "left">
          </li>
        </ul>
        <form class="col-md-4 form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2 " size="40" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div class="col-md-4 icons_div">
          <div class="col-md-3">
          </div>
          <div class="col-md-4" style="display: -webkit-inline-box;">
          <i class="far fa-user fa-xs"></i>
          <a id="cart" href="#" v-on:click="showShoppingCart"> <i id="cart" class="fas fa-shopping-cart fa-xs"></i></a>


          </div>
        </div>
      </div>

    </nav>

</template>
<script>
import Landing from '../Landing.vue';
import ShoppingCart from './ShoppingCart.vue'
export default {
  data() {
    name: 'LandingHeader';
    return {};
  },
  components: {
    ShoppingCart: ShoppingCart
  },
  methods: {
    showShoppingCart: function  ()
    {
    
      this.$emit('showcart', 'show');
    }

  }
};

</script>

<style scoped lang="scss">
@import '../custom_css/landing.scss';
</style>
