const {Game} = require('../obj/game.js')
const Player = require('../obj/player.js')

class GameService {
  constructor() {
    this.games = []
  }

  generateId() {
    return Math.random().toString(36).substr(2,9)
  }

  async create(socketId, pointsNeeded) {
    let id = this.generateId()
    this.games.push(new Game(id, pointsNeeded))

    let room = await this.getRoomById(id)
    room.players.push(new Player(socketId))
    return id
  }

  async destroy(id) {
    let room = await this.getRoomById(id)
    let i = this.games.indexOf(room)
    this.games.splice(i, 1)
  }

  async join(socketId,id) {
    let room = await this.getRoomById(id)
    if(room) {
      if(room.players.length < 2) {
        room.players.push(new Player(socketId))
        return room.players
      }
      else {
        throw new Error('lobby is full')
      }
    }
  }

  async leave(socketId) {
    for (let j = 0; j < this.games.length; j++) {
      let room = this.games[j]
      let player = room.players.filter(player => player.id == socketId)[0]
      let i = room.players.indexOf(player)
      if(i > -1) {
        room.players.splice(i,1)
        return room.id
      }
      else {
        throw new Error()
      }
    }
  }

  async getRoomById(id) {
    let room = this.games.filter(game => game.id === id)[this.games.filter(game => game.id === id).length -1]
    if(room != undefined) {
      return room
    }
    else {
      throw new Error('lobby does not exist')
    }
  }

  async checkId(id, type) {
    let room = await this.getRoomById(id)
    .catch((e)=> {
      throw new Error(e)
    })
    let value;
    switch(type) {
      case 'LOBBY':
        value = {id: id, players: room.players}
      break;
      case 'GAME':
        value = room.dimensions
      break;
    }
    return value
  }

  async setPlayerDimensions(id, dimensions) {
    let room = await this.getRoomById(id)
    room.setPlayerDimensions(dimensions)
  }

  async getGameDimensions(id) {
    let room = await this.getRoomById(id)
    return room.dimensions
  }

  async setReady(id, socketId) {
    let room = await this.getRoomById(id)
    let player = room.players.filter(player => player.id === socketId)[0]
    player.setReady()
    return room.players
  }

  async allReady(id) {
    let room = await this.getRoomById(id)
    if(room.players.length == 2
      && room.players.every(player => player.isReady == true))
    {
      return
    }
    else {
      throw new Error('not all players are ready')
    }
  }

  async generateCords(id) {
    let room = await this.getRoomById(id)
    let cords = await room.generateCords()
    return cords
  }

  async checkTime(id, socketId, time) {
    let room = await this.getRoomById(id)
    let player = room.players.filter(player => player.id == socketId)[0]
    player.times.push(time)

    let roundWinner = await this.checkRoundWinner(room, socketId)
    .catch(e => {
      console.log(e);
    })
    roundWinner.score ++
    room.currentRound ++
    let score = room.players.map(player => player.score)
    return score
  }

  async checkRoundWinner(room, socketId) {
    let player = room.players.filter(player => player.id == socketId)[0]
    let otherPlayer = room.players.filter(player => player.id != socketId)[0]
    if(room.players.every(player => player.times[room.currentRound])) {
      let min = Math.min(player.times[room.currentRound], otherPlayer.times[room.currentRound])
      let winner = room.players.filter(player => player.times[room.currentRound] == min)[0]
      return winner
    }
    else {
      throw new Error('waiting for second player to make his move')
    }
  }

  async checkMatchWinner(id) {
    let room = await this.getRoomById(id)
    if(room.players.some(player => player.score == room.pointsNeeded)) {
      let winner = room.players.filter(player => player.score == room.pointsNeeded)[0]
      this.destroy(id)
      return winner.id
    }
    else {
      throw new Error()
    }
  }
}

const gameService = new GameService()

module.exports = gameService
