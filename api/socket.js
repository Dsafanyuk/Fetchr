const socket_io = require('socket.io');
const updateOpenOrders = require('./socket/updateOpenOrders')
const updateAcceptedOrders = require('./socket/updateAcceptedOrders')
const updateDeliveredOrders = require('./socket/updateDeliveredOrders')
const io = socket_io();

const socketApi = {};

socketApi.io = io;

io.on('connection', function (socket) {
    socket.on('disconnect',function(data){
        console.log('disconnected', data)
    })
    socket.on('ORDER_CREATED', function(client){
        updateOpenOrders(client,socket)
        // io.emit('UPDATE_OPEN_ORDERS')
    })
    socket.on('ORDER_ACCEPTED', function (client){
        updateAcceptedOrders(client,socket)
    })
    socket.on('ORDER_DELIVERED', function (client){
        updateDeliveredOrders(client, socket)
    })
});

module.exports = socketApi;
