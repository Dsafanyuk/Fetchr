<template>
<<<<<<< HEAD
  <v-app>
    <LandingHeader></LandingHeader>
    <div class="confirmation">
      <h3 class="thankyou">Thank you for using our service!</h3>
      <div class="userInfo">
        <p>Your order number is {{this.$route.query.order}}.</p>
        <p>You can check the status of your orders in the My Orders tab.</p>
      </div>
    </div>
    <LandingFooter></LandingFooter>
  </v-app>
=======
    <v-app>
        <LandingHeader></LandingHeader>
        <div class="confirmation">
            <h3 class="thankyou">Thank you for using our service!</h3>
            <div class="userInfo">
                <p>Your order number is {{this.$route.query.order}}.</p>
                <p>You can check the status of your orders in the My Orders tab.</p>
            </div>
        </div>
        <LandingFooter></LandingFooter>
    </v-app>
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
</template>


<script>
<<<<<<< HEAD
import LandingHeader from "./mini-components/LandingHeader.vue";
import LandingFooter from "./mini-components/LandingFooter.vue";

export default {
  data() {
    name: return {};
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter
  },
  // Clear the cart
  created: function emptyCart() {
    this.$store.getters["cart/cartItems"].map(product => {
      this.$store.commit("cart/removeItem", product);
    });
  }
};
</script>
        
<style scoped lang="css" src='./custom_css/confirmation.css'>
</style>
=======
        import LandingHeader from './mini-components/LandingHeader.vue';
        import LandingFooter from './mini-components/LandingFooter.vue';
        
        export default {
        
          data () {
            name: 
            return {
            };
          },
          components: {
            LandingHeader: LandingHeader,
            LandingFooter: LandingFooter,
          },
        }
        
</script>
        
<style scoped lang="css" src='./custom_css/confirmation.css'>
</style>
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
