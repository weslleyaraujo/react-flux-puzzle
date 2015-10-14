import React, { Component } from 'react';

import Board from './board';
import Options from './options';
import ProgressBar from './progress-bar';
import gameStore from '../store/game-store';

export default class Game extends Component {

  state = {
    fields: gameStore.data.fields,
    game: gameStore.data.game,
  }

  constructor(props) {
    super(props);
    this.bind();
  }

  bind = () => {
    gameStore.addChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      fields: gameStore.data.fields,
      game: gameStore.data.game,
    });
  }


  render = () => {
    return (
      <div className='c-flex-container'>
        { !this.state.game.status.playing && (
            <div className="c-flex-container">
                <ProgressBar />
                <Board />
                <Options />
            </div>
          )
        }
      </div>
    )
  }
}
