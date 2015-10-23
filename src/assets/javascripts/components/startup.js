import React, { Component } from 'react';

import matchActions from '../actions/match';

export default class StartUp extends Component {

  displayName: 'StartUp'

  constructor(props) {
    super(props);
  }

  onStartClick = (event) => {
    event.preventDefault();
    matchActions.start();
  }

  render = () => {
    return (
      <div className="c-startup c-flex-container">
        { this.props.store.get('status') === 'initial' && (
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
