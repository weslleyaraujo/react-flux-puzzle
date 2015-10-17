import React, { Component } from 'react';
import gameStore from '../store/game-store';

export default class ProgressBar extends Component {

  displayName: 'ProgressBar'

  constructor(props) {
    super(props);
  }

  render = () => {
    return (
      <div className='c-progress-bar'>
        <div className='c-progress-bar__bar' style={{ width: this.props.percentage + '%' }}></div>
      </div>
    )
  }
}
