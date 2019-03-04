<template>
<<<<<<< HEAD
  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
=======
  <div class="col-lg-3 m8 s12 offset-m2">
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    <div class="product-card">
      <div class="card z-depth-4">
        <div class="card-img">
          <span
            href="#"
<<<<<<< HEAD
            class="btn-floating btn-large price waves-effect waves-light custom"
          >${{product.price.toFixed(2)}}</span>
          <img :src="product.product_url" :alt="product.product_name">
        </div>
=======
            class="btn-floating btn-large price waves-effect waves-light brown darken-3"
          >${{product.price.toFixed(2)}}</span>
          <img :src="product.product_url" :alt="product.product_name">
        </div>
        <ul class="card-action-buttons">
          <li>
            <div v-if="isFavorite == 'true'">
              <a
                v-on:click="unfavorite()"
                id="favorite"
                class="btn-floating waves-effect waves-light red accent-2"
              >
                <i class="material-icons like">favorite</i>
              </a>
            </div>
            <div v-if="isFavorite == 'false'">
              <a
                v-on:click="favorite()"
                id="favorite"
                class="btn-floating waves-effect waves-light red accent-2"
              >
                <i class="material-icons like">favorite_border</i>
              </a>
            </div>
          </li>
          <li>
            <a v-on:click="addToCart()" id="buy" class="btn-floating waves-effect waves-light blue">
              <i v-if="inCart" class="material-icons buy">check</i>
              <i v-if="!inCart" class="material-icons buy">add_shopping_cart</i>
            </a>
          </li>
        </ul>
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <p>
                <span class="card-title text-center">
                  <span>{{product.product_name}}</span>
                </span>
                <br>
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div style="display:flex" class="btn_container">
          <div class="favorite_button">
            <v-btn
              id="fave_btn"
              block
              color="primary"
              v-if="isFavorite == 'true'"
              v-on:click="unfavorite()"
              dark
              :ripple="false"
            >
              <v-icon medium>favorite</v-icon>
            </v-btn>
            <v-btn
              id="fave_btn"
              block
              color="primary"
              v-if="isFavorite == 'false'"
              v-on:click="favorite()"
              :ripple="false"
            >
              <v-icon medium>favorite_border</v-icon>
            </v-btn>
          </div>
          <div class="cart_button">
            <v-btn id="cart_btn" block color="accent" v-on:click="addItem" :ripple="false">
              <v-icon medium v-if="inCart">check</v-icon>
              <v-icon medium v-if="!inCart">add_shopping_cart</v-icon>
            </v-btn>
          </div>
        </div>
=======
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import axios from "../../axios";
import Toasted from "vue-toasted";
import browserCookies from "browser-cookies";

=======
import axios from "axios";
import Toasted from "vue-toasted";
import browserCookies from "browser-cookies";
import _ from "lodash";
import State from "../assets/js/shoppingCartState";

const api = axios.create();
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
export default {
  props: {
    product: {
      product_id: String,
      product_name: String,
      price: Number,
      category: String,
      product_url: String,
      is_favorite: Boolean
    }
  },
  data() {
    return {
      isFavorite: this.product.is_favorite,
<<<<<<< HEAD
      productDetail: this.product.is_favorite
    };
  },
  components: {},
  watch: {},
  computed: {
    // Check if item is in cart, returns boolean value
    inCart: function() {
      return this.$store.getters["cart/cartItems"].includes(this.product);
    }
  },
  methods: {
    favorite: function() {
      axios
        .post("api/users/favorite", {
          user_id: browserCookies.get("user_id"),
=======
      inCart: false,
      shared: State.data
    };
  },
  components: {},
  methods: {
    favorite: function() {
      api
        .post("api/users/favorite", {
          user_id: browserCookies.get("userId"),
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
          product_id: this.product.product_id
        })
        .then(response => {
          if (response.status == 200) {
<<<<<<< HEAD
            console.log(response);
            this.isFavorite = "true";
            this.product.is_favorite = "true";
            this.$toasted.success("Added to favorites!").goAway(1000);
=======
            this.isFavorite = "true";
            console.log(`After favoriting, isFavorite = ${this.isFavorite}`);
            this.$toasted.success("Favorited").goAway(1000);
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
          }
        })
        .catch(error => {
          console.log(error);
          this.$toasted.error("Error favoriting").goAway(1000);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
    unfavorite: function() {
<<<<<<< HEAD
      axios
        .post("/api/users/unfavorite", {
          user_id: browserCookies.get("user_id"),
=======
      console.log(browserCookies.get("userId"));
      console.log(this.product.product_id);
      api
        .post("/api/users/unfavorite", {
          user_id: browserCookies.get("userId"),
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
          product_id: this.product.product_id
        })
        .then(response => {
          if (response.status == 200) {
<<<<<<< HEAD
            this.isFavorite = "false";
            this.product.is_favorite = "false";
            console.log(`After unfavoriting, isFavorite = ${this.isFavorite}`);
            this.$toasted.success("Removed from favorites!").goAway(1000);
=======
            console.log(response);
            this.isFavorite = "false";
            console.log(`After unfavoriting, isFavorite = ${this.isFavorite}`);
            this.$toasted.success("Unfavorited").goAway(1000);
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
          }
        })
        .catch(error => {
          console.log(error);
          this.$toasted.error("Error unfavoriting").goAway(1000);
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    },
<<<<<<< HEAD
    // Add item to cart
    addItem: function() {
      this.$toasted.success("Added to cart").goAway(1000);
      this.$store.commit("cart/addItem", this.product);
      this.$forceUpdate();
=======
    addToCart: function() {
      if (this.inCart) {
        this.inCart = false;
        this.$toasted.success("Removed from cart").goAway(1000);
      } else {
        this.inCart = true;
        this.$toasted.success("Added to cart").goAway(1000);
        State.add(this.product);
      }
    },
    inc() {
      State.inc(this.product);
    },
    dec() {
      State.dec(this.product);
    }
  },
  computed: {
    quantityIncart() {
      return 0;
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
    }
  }
};
</script>

<style scoped lang="css" src="../custom_css/landing_card.scss">
<<<<<<< HEAD
.btn-floating {
  background-color: #344955 !important;
}
=======
>>>>>>> 5749c5fdd381738159522ba089a84523f5da286f
</style>
