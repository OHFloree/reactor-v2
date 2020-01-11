import React, { Component,Fragment } from 'react';
import {Route, Link, Redirect} from 'react-router-dom'
import Context from '../context/context.js'

import {Page, Container, Row} from '../components/Layout.js'
import A from '../components/Link.js'
import Logo from '../components/Logo.js'

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {
    return (
      <Page>
        <Container justify="center" align="center">
          <Logo>Reactor</Logo>
        </Container>
        <Container justify="space-evenly" align="center">
          <Row width="50%"><A to="/create">Create Game</A></Row>
          <Row width="50%"><A to="/join">Join Game</A></Row>
          <Row width="50%"><A to="/rules">Rules</A></Row>
        </Container>
      </Page>
    )
  }
}
LandingPage.contextType = Context

export default LandingPage
