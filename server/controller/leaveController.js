const gameService = require('../services/gameService.js')

module.exports.res = (io,socket) => {
  socket.on('disconnect' , ()=> {
    gameService.leave(socket.id)
    .then((id) => {
      io.to(id).emit('redirect', '/')
    })
  })
}
