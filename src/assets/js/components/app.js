import React, { Component } from 'react';

import Startup from './startup';
import Game from './game';
import GameOver from './game-over';
import Audio from './audio';
import Analytics from './analytics';

import { getSound, soundsSrc } from '../helpers/get-sound';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let sound = this.props.store.get('sound');
    return (
        <div>
          <Analytics store={this.props.store} />
          <Startup store={this.props.store} />
          <Game store={this.props.store} />
          <GameOver store={this.props.store} />
          <Audio play={sound && getSound(sound)} sounds={soundsSrc} />
        </div>
    )
  }
}

export default App;
