class Player {
  constructor(id) {
    this.id = id
    this.isReady = false
    this.score = 0
    this.dimensions = {width: 0, height: 0}
    this.times = []
  }

  setReady() {
    this.isReady = true
  }

  score() {
    this.score ++
  }
}

module.exports = Player
