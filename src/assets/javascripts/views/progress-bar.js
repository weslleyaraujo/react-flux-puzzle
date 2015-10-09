import React, { Component } from 'react';
import gameStore from '../store/game-store';

export default class ProgressBar extends Component {

  constructor(props) {
    super(props);
    this.bind();
  }

  bind = () => {
    gameStore.addChangeListener(this.onChange);
  }

  state = {
    game: gameStore.data.game
  }


  onChange = () => {
    this.setState({
      game: gameStore.data.game,
    });
  }

  render = () => {
    return (
      <div className='c-progress-bar'>
        <div className='c-progress-bar__bar' style={{ width: this.state.game.timer.percentage + '%' }}></div>
      </div>
    )
  }
}
