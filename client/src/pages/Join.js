import React, { Component } from 'react';
import Context from '../context/context.js'

import {Page, Container, Row} from '../components/Layout.js'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import Error from '../components/Error.js'

class Join extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: ''
    }
  }

  componentDidMount() {
    this.context.socket.on('redirect', (path) => {
      this.props.history.push(path)
    })

    this.context.socket.on('err', (error)=> {
      this.setState({error})
    })
  }

  onChangeHandler = (e) => {
    let value = e.target.value
    this.setState({value})
  }

  join = () => {
    this.context.socket.emit('join', this.state.value)
  }


  render() {
    return (
      <Page>
        <Container justify="space-evenly" align="center">
          <Row width="50%">
            <Input placeholder="Lobby Code" value={this.state.value} onChange={this.onChangeHandler} />
          </Row>
          <Row width="50%">
            <Button onClick={this.join}>Join</Button>
          </Row>
            <Row width="100%" justify="center"><Error>{this.state.error}</Error></Row>
        </Container>
      </Page>
    )
  }
}
Join.contextType = Context

export default Join
