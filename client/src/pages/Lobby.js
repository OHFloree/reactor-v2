import React, { Component } from 'react';
import Context from '../context/context.js'

import {Page, Container, Row} from '../components/Layout.js'
import Input from '../components/Input.js'
import Label from '../components/Label.js'
import Button from '../components/Button.js'
import PlayerRow from '../components/PlayerRow.js'

import {copy} from '../utils/utils.js'

class Lobby extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      id: '',
      disabled: false
    }
  }

  componentDidMount() {
    this.context.socket.emit('checkLobbyId', this.props.match.params.gameId)

    this.context.socket.on('lobbyIdChecked', ({id, players})=> {
      console.log(players);
      this.setState({id, players})
    })

    this.context.socket.on('join', (players)=> {
      this.setState({players})
    })

    this.context.socket.on('update', players => {
      this.setState({players})
    })
  }

  ready = () => {
    let width = window.innerWidth
    let height = window.innerHeight
    this.context.socket.emit('ready', {id: this.state.id, dimensions: [width,height]})
    this.setState({disabled: true})
  }

  render() {
    return(
      <Page>
        <Container justify="center" align="center">
          {this.state.players.map((player,i)=> {
            return <Row key={`player-${i}`} width="50%"><PlayerRow ready={player.isReady} name={`Player ${i+1}`}  /></Row>
          })}
        </Container>
        <Container justify="space-evenly" align="center">
          <Row width="50%"><Button onClick={this.ready}>Ready</Button></Row>
          <Row width="50%" align="center">
            <Label color="#eeeeee">Invite Code:</Label>
            <Button justify="flex-start" icon="content_copy" onClick={copy} disabled={this.state.disabled}>{this.state.id}</Button>
          </Row>
        </Container>
      </Page>
    )
  }
}
Lobby.contextType = Context

export default Lobby
