const Player = require('./player.js')

class Game {
  constructor(id, pointsNeeded) {
    this.id = id
    this.pointsNeeded = pointsNeeded
    this.currentRound = 0;
    this.players = []
    this.playerDimensions = []
    this.pointSize = 50
    this.dimensions = {width:800,height: 600}
  }


  async setPlayerDimensions(dimensions) {
    this.playerDimensions.push(dimensions)
    if(this.playerDimensions.length == 2) {
      await this.setGameDimensions()
    }
  }

  async setGameDimensions(){
    let width = Math.min(this.playerDimensions[0][0], this.playerDimensions[0][1]) * 0.8
    let height = Math.min(this.playerDimensions[1][0], this.playerDimensions[1][1]) * 0.8
    console.log(width,height);
    this.dimensions = {width,height}
  }

  async generateCords() {
    let x = this.getRandomNum(this.dimensions.width - this.pointSize, this.pointSize)
    let y = this.getRandomNum(this.dimensions.height - this.pointSize, this.pointSize)
    let cords = Promise.all([x,y])
    return cords
  }

  async getRandomNum(min,max) {
    return Math.floor(Math.random() * (max - min) + min) +1
  }
}

module.exports = {
  Game
}
