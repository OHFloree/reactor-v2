import React, { Component } from 'react';
import Context from '../context/context.js'
import {Redirect} from 'react-router-dom'

import {Page, Container, Row} from '../components/Layout.js'
import InputNumber from '../components/InputNumber.js'
import Input from '../components/Input.js'
import Button from '../components/Button.js'
import Label from '../components/Label'
import Error from '../components/Error.js'

class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      points: 3,
      error: ''
    }
  }

  componentDidMount() {
  }

  onChangePoints = (points) => {
    this.setState({points}, ()=> {
      if(this.state.points < 0) {
        this.setState({points: 1})
      }
      else if(this.state.points > 10) {
        this.setState({points: 10})
      }
    })
  }

  onChangeName = (e) => {
    let name = e.target.value
    this.setState({name})
   }

  createGame = () => {
    let {name, points} = this.state
    if(this.state.points <= 0) {
      this.setState({error: 'A minimum of 1 point is required'})
    }
    else {
      this.context.socket.emit('create', points)
    }
  }

  render() {
    return(
      <Page>
        <Container justify="space-evenly" align="center">
          <Row width="50%" justify="space-between" align="center">
            <Label>Points needed:</Label>
            <InputNumber value={this.state.points} onChangeHandler={this.onChangePoints} label="Points needed:" />
          </Row>
          <Row width="50%">
            <Button onClick={this.createGame}>Create Game</Button>
          </Row>
          <Row width="100%" justify="center"><Error>{this.state.error}</Error></Row>
        </Container>
      </Page>
    )
  }
}
Create.contextType = Context

export default Create
