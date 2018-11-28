<template>
<v-app>
    <LandingHeader></LandingHeader>
    <div class="checkout">
        <h3>Checkout</h3>
        <v-data-table 
            :headers="headers"
            :items="products">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.p_name }}</td>
                <td class="text-xs-left">${{ props.item.p_price }}</td>
                <td class="text-xs-left">{{ props.item.p_quan }}</td>
            </template>
        </v-data-table>
        <div class="submitOrderButton">
            <button
                class="btn btn-outline-dark my-2 my-sm-0" 
                type="submit"
                v-on:click="checkout">
                    Submit Order
            </button>
        </div>
    </div>
    <LandingFooter></LandingFooter>
</v-app>
</template>
    
    <script>
    import LandingHeader from './mini-components/LandingHeader.vue';
    import LandingFooter from './mini-components/LandingFooter.vue';
    import browserCookies from 'browser-cookies';
    import axios from 'axios';
    
    export default {
    
      data () {
        name: 
        return {
            products: [],
            headers: [
                { text: 'Name', align: 'left', value:'p_name' },
                { text: 'Price', align: 'left', value:'p_price' },
                { text: 'Quantity', align: 'left', value:'p_quan' }
            ],
            //This is the products recieved from cart
            productsRecieved: []
        };
      },
      mounted: function() {
        //Set this.productsRecieved to the prods from cart
        this.productsRecieved = [
            {
                p_id: '1',
                p_name: 'Pepe Cola',
                p_quan: 7,
                p_price: 4.50
            },
            {
                p_id: '2',
                p_name: 'Pepe Plushie',
                p_quan: 1,
                p_price: 14.99
            },
            {
                p_id: '3',
                p_name: 'Pepe Scrubber',
                p_quan: 12,
                p_price: 20
            }
        ]
            
        //setting prods in table
        this.products = this.productsRecieved.map((product) => {
                    //put price in right format
                    product.p_price = product.p_price.toFixed(2)
                    //this is for the v-data-table
                    product.value = false
                    return product
                })
      },
      methods:{
            checkout: function(event) {
                let router = this.$router

                let total = 0
                let productsWithQuantity = []
                this.productsRecieved.map((product) => {
                    //get the total of the products for the order
                    total += parseFloat(product.p_price)
                    //put all the products into a json array
                    productsWithQuantity.push(
                        {
                            product_id: product.p_id,
                            quantity: product.p_quan
                        }
                    )
                })
                axios.post('http://127.0.0.1:3000/api/orders/',
                    {
                        customer_id: browserCookies.get('userId'),
                        delivery_status: 'pending',
                        order_total: total,
                        productsWithQuantity: productsWithQuantity
                    }
                ).then(function(response) {
                    //go to the confirmation page and send it the order id
                    router.push('/confirmation?order=' + response.data.message);
                })
                .catch(function(response) {
                    console.log(response)
                })
          }
      },
      components: {
        LandingHeader: LandingHeader,
        LandingFooter: LandingFooter,
      },
    }
    
    </script>
    
    <style scoped lang="css">
        @import 'custom_css/checkout.css';
    </style>
    