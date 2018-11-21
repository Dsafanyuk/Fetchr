<template>
<<<<<<< Updated upstream
<v-app>
    <LandingHeader v-on:showcart="displayCart" > </LandingHeader>
 <ShoppingCart v-if ="seen" ></ShoppingCart>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <ul class="  nav justify-content-center">
                    <li class="cat_menu nav-item">
                        <a class="nav-link" href="#">Food</a>
                    </li>
                    <li class="cat_menu nav-item">
                        <a class="nav-link" href="#">Snacks</a>
                    </li>
                    <li class="cat_menu nav-item">
                        <a class="nav-link" href="#">Drink</a>
                    </li>
                    <li class="cat_menu nav-item">
                        <a class="nav-link" href="#">  </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="row">
                <LandingCard v-for="product in products" :key="product.product_id" :product=product ></LandingCard>
        </div>

    </div>
    <LandingFooter> </LandingFooter>


</v-app>
=======
    <v-app>
        <LandingHeader></LandingHeader>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="category-wrapper">
                        <input v-model="selectedCategory" id="tab1" type="radio" name="tabs" value="Popular">
                        <label for="tab1">
                            <span>Popular
                            <i class="material-icons" style="vertical-align: middle;">whatshot</i>
                            </span>
                        </label>
                        <input v-model="selectedCategory" id="tab2" type="radio" name="tabs" value="Snacks">
                        <label for="tab2">Snacks</label>
                        <input v-model="selectedCategory" id="tab3" type="radio" name="tabs" value="Drinks">
                        <label for="tab3">Drinks</label>
                        <input v-model="selectedCategory" id="tab4" type="radio" name="tabs" value="School Supplies">
                        <label for="tab4">School Supplies</label>
                        <input v-model="selectedCategory" id="tab5" type="radio" name="tabs" value="Misc">
                        <label for="tab5">Misc</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <LandingCard
                    v-for="product in filteredProducts"
                    :key="product.product_id"
                    :product="product"
                ></LandingCard>
            </div>
        </div>
        <LandingFooter></LandingFooter>
    </v-app>
>>>>>>> Stashed changes
</template>

<script>
import LandingHeader from './mini-components/LandingHeader.vue';
import LandingFooter from './mini-components/LandingFooter.vue';
import LandingCard from './mini-components/LandingCard.vue';
import ShoppingCart from './mini-components/ShoppingCart.vue';
import axios from 'axios';
import Toasted from 'vue-toasted';

<<<<<<< Updated upstream


export default {
  data() {
    return {
      seen : false,
      products: {},
    };
  },
  props: {},
  mounted: function loadProducts() {
=======
export default {
  data() {
    return {
      products: {},
      selectedCategory: 'Popular',
    };
  },
  props: {},
  created: function loadProducts() {
>>>>>>> Stashed changes
    let loadingProductsToast = this.$toasted.show('Loading products...');
    axios
      .get('http://localhost:3000/api/products')
      .then((response) => {
        this.products = response.data;
<<<<<<< Updated upstream
        console.log(this.products);
        loadingProductsToast.text('Products loaded!').goAway(5000);
      })
      .catch((error) => {
        console.log(error);
=======
        loadingProductsToast.text('Products loaded!').goAway(5000);
      })
      .catch((error) => {
          console.log(error);
>>>>>>> Stashed changes
        loadingProductsToast.goAway();
        this.$toasted.error('Something went wrong');
      });
  },
<<<<<<< Updated upstream
=======
  computed: {
    filteredProducts() {
        var category = this.selectedCategory.toLowerCase().split(' ').join('_')
        console.log(`Category = ${category}`)
        if (category === 'popular' || !category){
            return this.products;
        } else {
            return this.products.filter((product) => {
                return product.category === category;
            });
        }
    },
},
>>>>>>> Stashed changes
  components: {
    LandingHeader: LandingHeader,
    LandingFooter: LandingFooter,
    LandingCard: LandingCard,
    ShoppingCart: ShoppingCart,
  },
<<<<<<< Updated upstream
  methods : {
    displayCart(show){
     if (this.seen)
      this.seen = false;
      else {
        this.seen = true;
      }
    }
  }

=======
>>>>>>> Stashed changes
};
</script>

<style lang="css">
<<<<<<< Updated upstream
@import 'custom_css/landing.scss';
</style>
=======
    @import 'custom_css/landing.scss';
</style>
>>>>>>> Stashed changes
