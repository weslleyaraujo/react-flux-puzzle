import React, { Component } from 'react';

import countdown from '../helpers/countdown';
import ProgressBar from './progress-bar';

const SECOND = 1000;
const INITIAL_TIME = SECOND * 10;

export default class Timer extends Component {

  displayName: 'Timer'

  rules = {
    decrease: () => this.countdown.decrease(10),
    increase: () => this.countdown.add(2),
    upgrade: () => this.countdown.add(5)
  }

  state = {
    minutes: '00',
    seconds: '00',
    milliseconds: '000',
    percentage: 100
  }

  constructor(props) {
    super(props);
  }

  componentWillMount = (a, b) => {
    console.log('componentWillMount from Timer');
    this.countdown = countdown(INITIAL_TIME, ::this.onCountDownChange, ::this.onCountDownDone);
  }

  componentDidMount = () => {
    this.countdown.start();
  }

  componentWillReceiveProps = (props) => {
    this.rules[props.timer]();
  }

  onCountDownChange = (data) => {
    this.setState(data)
  }

  onCountDownDone = (data) => {
    console.log('onCountDownDone', data);
    // action()
    // this.setState...
  }

  render = () => {
    let { minutes, seconds, milliseconds, percentage } = this.state;
    return (
        <div>
          <strong>{ minutes }:{ seconds }:{ milliseconds }</strong>
          <ProgressBar percentage={ percentage } />
        </div>
    );
  }

}
