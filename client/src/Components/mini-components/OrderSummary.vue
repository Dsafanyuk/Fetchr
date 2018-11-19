<template>
    <v-dialog width="500">
            <button slot="activator" class="btn btn-outline-success my-2 my-sm-0" type="button">View</button>
                <v-card>
                <v-card-title class="headline grey lighten-2" primary-title >
                    Order Summary
                </v-card-title>
                <v-divider></v-divider>
                <div v-for="product in products">
                    <v-card-text class="product">
                        {{product.product_name}}
                        ${{product.price.toFixed(2)}}
                        {{product.quantity}}
                    </v-card-text>
                    <v-divider></v-divider>
                </div>
                <v-card-actions>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
    import axios from 'axios';

    export default {
        props: {
            productID: Number
        },
        data() {
            return {
                products: {}
            };
        },
        mounted: function() {
            axios.get('http://localhost:3000/api/orders/' + this.productID + '/summary').then((response) => {
            this.products = response.data;
            });
        },
    };
</script>

<style>
    .product {
        grid-template-columns: 1fr 1fr 1fr;
    }
</style>