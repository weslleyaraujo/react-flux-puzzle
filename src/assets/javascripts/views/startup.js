import React, { Component } from 'react';

import Field from './field';
import matchActions from '../actions/match';
import gameStore from '../store/game-store';

export default class Options extends Component {

  state = {
    fields: gameStore.data.fields,
    game: gameStore.data.game,
    options: gameStore.data.options,
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
      game: gameStore.data.game,
      options: gameStore.data.options,
      fields: gameStore.data.fields,
    });
  }

  onStartClick = (event) => {
    event.preventDefault();
    matchActions.start();
  }

  render = () => {
    return (
      <div className='c-startup c-flex-container'>
        <div className='c-startup__item'>
          <h1 className='c-title'>React + Flux + Puzzle</h1>
          <p>a experiment puzzle game built with react + flux structure</p>
        </div>
      </div>
    )
  }
}
