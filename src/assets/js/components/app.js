import React, { Component } from 'react';

import Startup from './startup';
import Game from './game';
import GameOver from './game-over';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Startup store={this.props.store} />
          <Game store={this.props.store} />
          <GameOver store={this.props.store} />
        </div>
    )
  }
}
