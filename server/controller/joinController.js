const gameService = require('../services/gameService.js')

module.exports.res = (io,socket) => {
  socket.on('join', (id) => {
    gameService.join(socket.id, id)
    .then((players) => {
      socket.join(id)
      socket.emit('redirect', `/lobby/${id}`)
      io.to(id).emit('join', players)
    })
    .catch((e) => {
      console.log(e.message);
      socket.emit('err' , e.message)
    })
  })
}
