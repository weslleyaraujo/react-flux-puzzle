import React, { Component } from 'react';

export default class GameOver extends Component {

  displayName: 'GameOver'

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        { this.props.store.get('status') === 'gameover' && (
            <div>
              GAME OVER
            </div>
          )
        }
      </div>
    )
  }
}
