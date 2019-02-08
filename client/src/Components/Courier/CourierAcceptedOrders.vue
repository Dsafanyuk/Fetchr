<template>
    <v-card>
        <v-card-title>
            Your Orders
            <v-spacer></v-spacer>
            <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="orders">
            <template slot="items" slot-scope="props">
                <th>{{props.item.order_id}}</th>
                <td>{{props.item.first_name}}</td>
                <td>{{props.item.building}}</td>
                <td>{{props.item.room_num}}</td>
                <td>{{props.item.delivery_status}}</td>
                <td>{{props.item.time_delivered}}</td>
                <td>{{props.item.time_created}}</td>
                <td>${{props.item.order_total}}</td>
                <td><OrderSummary :productID="props.item.order_id"></OrderSummary></td>
            </template>
        </v-data-table>
    </v-card>
</template>
    
    <script>
        import OrderSummary from "../mini-components/OrderSummary";
    export default {
        name: "CourierOrderTable",
        data() {
        return {
            headers: [
            { text: "Order", align: "left", value: 'order_id' },
            { text: "Name", align: "left", value: 'first_name'},
            { text: "Building", align: "left", value: 'building' },
            { text: "Room #", align: "left", value: 'room_num' },
            { text: "Delivery Status", align: "left", value: 'delivery_status' },
            { text: "Time Delivered", align: "left", value: 'time_delivered' },
            { text: "Time Created", align: "left", value: 'time_created' },
            { text: "Order Total", align: "left", value: 'order_total' },
            { text: " ", align: "left" },
            ],
            search: '',
        };
        }, 
        props: {
        orders: Array,
        },
        computed: {},
        components: {
        'OrderSummary': OrderSummary,
        },
        methods: {
        }
    };
    </script>
    
    <style scoped lang="css">
    </style>
    