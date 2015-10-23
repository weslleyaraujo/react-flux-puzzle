import React, { Component } from 'react';

import Board from './board';
import Options from './options';
// import ProgressBar from './progress-bar';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div>
        { this.props.store.get('status') === 'playing' && (
            <div>
              <Board fields={this.props.store.get('fields')} />
              <Options options={this.props.store.get('options')} />
            </div>
          )
        }
      </div>
    )
  }
}
