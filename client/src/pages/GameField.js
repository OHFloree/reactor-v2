import React, { Component } from 'react';
import Context from '../context/context.js'
import styled from 'styled-components'

import {Page} from '../components/Layout.js'
import Scoreboard from '../components/Scoreboard.js'
import Canvas from '../components/Canvas.js'

class GameField extends Component {
  constructor() {
    super();
    this.state = {
      score: [0,0],
      dimensions: {}
    }

  }

  componentDidMount() {
    this.context.socket.emit('checkGameId', this.props.match.params.gameId)

    this.context.socket.on('gameIdChecked', dimensions => {
      this.setState({dimensions})
    })

    this.context.socket.on('score', score => {
      this.setState({score})
    })
  }


  render() {
    return (
      <Page align="center">
        <Scoreboard score={this.state.score} />
        <Canvas width={this.state.dimensions.width} height={this.state.dimensions.height} gameId={this.props.match.params.gameId} />
      </Page>
    )
  }
}
GameField.contextType = Context

export default GameField
