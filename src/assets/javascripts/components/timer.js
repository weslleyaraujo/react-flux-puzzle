import React, { Component } from 'react';
import { Map } from 'immutable';

import countdown from '../helpers/countdown';

const INITIAL_TIME = 1000 * 10; // 10 SEC

export default class Timer extends Component {

  displayName: 'Timer'

  rules = Map({
    decrease: -10,
    increase: 2,
    upgrade: 10
  })

  state = {
    timer: {
      minutes: '00',
      seconds: '00',
      milliseconds: '000',
      percentage: 100
    }
  }

  isPlaying = () => this.props.status === 'playing'

  constructor(props) {
    super(props);
  }

  componentWillMount = (a, b) => {
    console.log('componentWillMount from Timer');
    this.state.countdown = countdown(INITIAL_TIME, this.onCountDownChange, this.onCountDownDone);
  }

  componentDidMount = () => {
    this.state.countdown.start();
  }

  componentWillReceiveProps = (props) => {
    this.state.countdown.set(this.rules.get(props.timer));
  }

  onCountDownChange = (data) => {
    console.log('onCountDownChange', data);
    // this.setState...
  }

  onCountDownDone = (data) => {
    console.log('onCountDownDone', data);
    // action()
    // this.setState...
  }

  render = () => {
    return <div></div>;
  }

}
