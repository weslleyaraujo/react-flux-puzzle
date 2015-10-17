import React, { Component } from 'react';
import gameStore from '../store/game-store';

export default class ProgressBar extends Component {

  displayName: 'ProgressBar'

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
      game: gameStore.data,
    });
  }

  render = () => {
    return (
      <div className='c-progress-bar'>
        <div className='c-progress-bar__bar' style={{ width: this.props.percentage + '%' }}></div>
      </div>
    )
  }
}
