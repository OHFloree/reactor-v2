const gameService = require('../services/gameService.js')

module.exports.res = (socket) => {
  socket.on('create', points => {
    gameService.create(socket.id, points)
    .then((id) => {
      gameService.getRoomById(id)
      socket.join(id)
      socket.emit('redirect', `/lobby/${id}`)
    })
    .catch(() => {
      socket.emit('redirect', '/')
    })
  })
}
