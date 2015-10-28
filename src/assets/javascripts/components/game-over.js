import React, { Component } from 'react';

import matchActions from '../actions/match';

export default class GameOver extends Component {

  displayName: 'GameOver'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { level } = this.props.store.toJSON();
    return (
      <div>
        { this.props.store.get('status') === 'gameover' && (
            <div className='c-game c-game--over'>
              <h2 className="c-title c-game__title">GAME OVER!</h2>
              <p>You reached level: { level }</p>
              <div className="c-game__button">
                <button className="c-button" onClick={matchActions.start}>Play again</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
}
