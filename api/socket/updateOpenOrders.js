<<<<<<< HEAD
module.exports = function(client,socket){
=======
module.exports = function(data,socket){
>>>>>>> 0bc0b1315c52f629686439fe18b94b4e458e8741
    socket.broadcast.emit('UPDATE_OPEN_ORDERS')
    console.log('EVENT RECEIVED: ORDER_CREATED')
}
