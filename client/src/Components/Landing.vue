<template>
<v-app>
    <LandingHeader> </LandingHeader>
    <div class="container-fluid">
        <div class="row">
            <div class=" cat_menu col-md-12">
                <ul class="  nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Food</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Snacks</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Drink</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">  </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row" v-for="i in Math.ceil(products.length / 4)" :key="i">
            <div class="card_container col-md-9">
                <LandingCard v-for="product in products.slice((i-1)*4, i * 4)" :key="product.product_id" :product=product></LandingCard>
            </div>
        </div>
        <div class="col-md-3">

        </div>
    </div>
    <LandingFooter> </LandingFooter>


</v-app>
</template>

<script>
import LandingHeader from './LandingHeader.vue';
import LandingFooter from './LandingFooter.vue';
import LandingCard from './LandingCard.vue';
import ProductInfo from './ProductInfo.vue';
import axios from 'axios';

export default {
  data() {
    name: 'landing';
    return {
      name: 'Ok',
      products: null,
    };
  },
  mounted: function() {
    axios.get('http://localhost:3000/api/products').then((response) => {
      response['data'].forEach((element) => {
        console.log(element);
      });
      this.products = response.data;
    });
  },
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter,
    LandingCard: LandingCard,
    ProductInfo: ProductInfo,
  },
};
</script>

<style lang="css">
@import 'custom_css/landing.scss';
</style>
