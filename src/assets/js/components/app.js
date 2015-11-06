import React, { Component } from 'react';

import Startup from './startup';
import Game from './game';
import GameOver from './game-over';
import Audio from './audio';
import Analytics from './analytics';

import { getSound, soundsSrc } from '../helpers/get-sound';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Analytics store={this.props.store} />
          <Startup store={this.props.store} />
          <Game store={this.props.store} />
          <GameOver store={this.props.store} />
          <Audio play={getSound(this.props.store.get('sound'))} sounds={soundsSrc} />
        </div>
    )
  }
}
