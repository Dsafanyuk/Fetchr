<template>
<div class="col-lg-3 m8 s12 offset-m2">
    <div class="product-card">
        <div class="card  z-depth-4">
            <div class="card-image">
                <a href="#" class="btn-floating btn-large price waves-effect waves-light brown darken-3">{{product.price}}</a>
                <img :src=product.product_url :alt=product.product_name>
                <span class="card-title text-center" style="position: absolute;
                                                            top: 50%;
                                                            left: 50%;
                                                            transform: translate(-50%, -50%);">
                <span>{{product.product_name}}</span></span>
            </div>
            <ul class="card-action-buttons">

                <li><a class="btn-floating waves-effect waves-light red accent-2"><i class="material-icons like">favorite_border</i></a>
                </li>
                <li><a id="buy" class="btn-floating waves-effect waves-light blue"><i class="material-icons buy">add_shopping_cart</i></a>
                </li>
            </ul>
            <div class="card-content">
                <div class="row">
                    <div class="col s12">
                        <p>
                            <strong>Description:</strong> <br />
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare auctor metus vel mollis.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    product: {
      product_id: String,
      product_name: String,
      price: Number,
      category: String,
      product_url: String,
    },
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="css">
@import '../custom_css/landing_card.scss';
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css');
</style>
