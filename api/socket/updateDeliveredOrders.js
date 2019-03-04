<<<<<<< HEAD
module.exports = function (client, socket) {
    socket.broadcast.emit('UPDATE_DELIVERED_ORDERS')
    console.log('EVENT RECEIVED: ORDER_DELIVERED')

=======
module.exports = function (data, socket) {
    socket.broadcast.emit('UPDATE_DELIVERED_ORDERS', data)
    console.log('EVENT RECEIVED: ORDER_DELIVERED')
>>>>>>> 0bc0b1315c52f629686439fe18b94b4e458e8741
}
