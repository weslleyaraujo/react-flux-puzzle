import React, { Component } from 'react';

import Board from './board';
import Options from './options';
import Timer from './timer';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { timer, status, level } = this.props.store.toJSON();
    return (
      <div>
        { this.props.store.get('status') === 'playing' && (
            <div className='c-game'>
              <h2 className='c-title'>Level: { level }</h2>
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
