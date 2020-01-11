const gameService = require('../services/gameService.js')

module.exports.res = function(io,socket) {
  socket.on('checkLobbyId', (id)=> {
    gameService.checkId(id, 'LOBBY')
    .then((res) => {
      socket.emit('lobbyIdChecked', res)
    })
    .catch(()=> {
      socket.emit('redirect', '/')
    })
  })

  socket.on('ready', ({id, dimensions}) => {
    gameService.setReady(id, socket.id)
    .then((players) => {
      io.to(id).emit('update', players)
      gameService.setPlayerDimensions(id,dimensions)
      .then(() => {
        gameService.allReady(id)
        .then(() => {
          io.to(id).emit('redirect', `/game/${id}`)
        })
        .catch(e => {
          console.log(e);
        })
      })
    })
  })
}
