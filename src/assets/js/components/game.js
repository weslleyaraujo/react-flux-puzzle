import React, { Component } from 'react';

import Board from './board';
import Options from './options';
import Timer from './timer';
import Audio from './audio';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { timer, status } = this.props.store.toJSON();
    return (
      <div>
        { this.props.store.get('status') === 'playing' && (
            <div className='c-game'>
              <Board fields={this.props.store.get('fields')} />
              <Timer timer={timer} status={status}/>
              <Options options={this.props.store.get('options')} />
            </div>
          )
        }
      </div>
    )
  }
}
