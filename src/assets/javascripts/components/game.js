import React, { Component } from 'react';
import Sound from 'react-sound';

import Board from './board';
import Options from './options';
import Timer from './timer';
import getSound from '../helpers/get-sound';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { timer, status, sound } = this.props.store.toJSON();
    console.log(getSound(sound));
    return (
      <div>
        { this.props.store.get('status') === 'playing' && (
            <div className='c-game'>
              <Board fields={this.props.store.get('fields')} />
              <Timer timer={timer} status={status}/>
              <Options options={this.props.store.get('options')} />
              { sound && <Sound url={getSound(sound)} playStatus={Sound.status.PLAYING} /> }
            </div>
          )
        }
      </div>
    )
  }
}
