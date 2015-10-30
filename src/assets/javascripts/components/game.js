import React, { Component } from 'react';
import Sound from 'react-sound';

import Board from './board';
import Options from './options';
import Timer from './timer';
import sounds from '../helpers/sounds';

export default class Game extends Component {

  displayName: 'Game'

  constructor(props) {
    super(props);
  }

  render = () => {
    let { timer, status, sound } = this.props.store.toJSON();
    console.log(Sound.status);
    return (
      <div>
        { this.props.store.get('status') === 'playing' && (
            <div className='c-game'>
              <Board fields={this.props.store.get('fields')} />
              <Timer timer={timer} status={status}/>
              <Options options={this.props.store.get('options')} />
              { sound && <Sound url={sounds[sound]} playStatus={'PLAYING'} /> }
            </div>
          )
        }
      </div>
    )
  }
}
