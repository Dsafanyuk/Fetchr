const socket_io = require('socket.io');
const updateOpenOrders = require('./socket/updateOpenOrders');
const updateAcceptedOrders = require('./socket/updateAcceptedOrders');
const updateDeliveredOrders = require('./socket/updateDeliveredOrders');

const io = socket_io();

const socketApi = io;

socketApi.on('connection', (socket) => {
  console.log('refresh');
  // socket.on('ORDER_CREATED', (data) => {
  //   console.log('print something come on')
  //   updateOpenOrders(socket);
  // });
  // socket.on('ORDER_ACCEPTED', (data) => {
  //   updateAcceptedOrders(data, socket);
  // });
  // socket.on('ORDER_DELIVERED', (data) => {
  //   updateDeliveredOrders(data, socket);
  // });
});

module.exports = socketApi;
