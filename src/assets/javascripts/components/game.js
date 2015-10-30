import React, { Component } from 'react';
import Sound from 'react-sound';

import Board from './board';
import Options from './options';
import Timer from './timer';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { timer, status } = this.props.store.toJSON();
    console.log('song:', this.props.store.get('song'));
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
