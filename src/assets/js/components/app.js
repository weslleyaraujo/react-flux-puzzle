import React, { Component } from 'react';

import Startup from './startup';
import Game from './game';
import GameOver from './game-over';
import Audio from './audio';

import getSound from '../helpers/get-sound';

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
          <Audio sound={getSound(this.props.store.get('sound'))} />
        </div>
    )
  }
}
