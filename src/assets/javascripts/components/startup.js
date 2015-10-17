import React, { Component } from 'react';

import matchActions from '../actions/match';
import gameStore from '../store/game-store';

export default class StartUp extends Component {

  displayName: 'StartUp'

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

  onStartClick = (event) => {
    event.preventDefault();
    matchActions.start();
  }

  render = () => {
    return (
      <div className="c-startup c-flex-container">
        { !this.state.data.status.playing && (
              <div className="c-startup__item">
                <h1 className="c-title">React + Flux + Puzzle</h1>
                <p>a experiment puzzle game built with react + flux structure</p>
                <div className="c-startup__button">
                  <button className="c-button" onClick={this.onStartClick}>Start</button>
                </div>
              </div>
          )
        }
      </div>
    )
  }

}
