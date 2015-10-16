import React, { Component } from 'react';

import Board from './board';
import Options from './options';
import ProgressBar from './progress-bar';
import gameStore from '../store/game-store';

export default class Game extends Component {

  state = {
    data: gameStore.data,
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
      data: gameStore.data,
    });
  }


  render = () => {
    // <ProgressBar />
    return (
      <div className='c-flex-container'>
        { this.state.data.status.playing && (
            <div className="c-flex-container">
                <Board />
                <Options />
            </div>
          )
        }
      </div>
    )
  }
}
