const gameService = require('../services/gameService.js')

module.exports.res = function(io,socket) {
  socket.on('checkGameId', (id) => {
    gameService.checkId(id, 'GAME')
    .then((dimensions) => {
      socket.emit('gameIdChecked', dimensions)
      gameService.generateCords(id)
      .then(cords => {
        io.to(id).emit('cords', cords)
      })
    })
    .catch(() => {
      socket.emit('redirect', '/')
    })
  })

  socket.on('clicked', ({id, time}) => {
    gameService.checkTime(id, socket.id, time)
    .then(score => {
      io.to(id).emit('score', score)
      gameService.checkMatchWinner(id)
      .then(winner => {
        io.to(id).emit('redirect', '/')
      })
      .catch(() => {
        gameService.generateCords(id)
        .then(cords => {
          io.to(id).emit('cords', cords)
        })
      })
    })
  })
}
