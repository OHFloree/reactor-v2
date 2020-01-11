import React, {Component} from 'react';
import {Route, Switch , withRouter} from 'react-router-dom'
import io from 'socket.io-client';
import Context from './context/context.js'

import LandingPage from './pages/LandingPage.js'
import Create from './pages/Create.js'
import Join from './pages/Join.js'
import Lobby from './pages/Lobby.js'
import Rules from './pages/Rules.js'
import GameField from './pages/GameField.js'
import NotFound from './pages/NotFound.js'
import GithubButton from './components/GithubButton.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      socket: io.connect('localhost:8080')
    }
  }

  componentDidMount() {
    this.state.socket.on('redirect', (path) => {
      this.props.history.push(path)
    })
  }

  render() {
    return (
        <Context.Provider value={this.state}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/create" component={Create} />
              <Route path="/join" component={Join} />
              <Route path="/rules" component={Rules} />
              <Route path="/lobby/:gameId" component={Lobby} />
              <Route path="/game/:gameId" component={GameField} />
              <Route path="*" component={NotFound} />
            </Switch>
            {this.props.location.pathname.includes('/game') ? null : <GithubButton />}
        </Context.Provider>
    );
  }
}

export default withRouter(App);
