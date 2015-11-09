import React, { Component } from 'react';
import classNames from 'classnames';

import Countdown from '../helpers/countdown';
import ProgressBar from './progress-bar';
import { matchActions } from '../actions/match';

const SECOND = 1000;
const INITIAL_TIME = SECOND * 10;

export default class Timer extends Component {

  displayName: 'Timer'

  rules = {
    decrease: () => this.countdown.decrease(10),
    increase: () => this.countdown.add(2),
    upgrade: () => this.countdown.add(3)
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
    this.countdown = new Countdown({
      duration: INITIAL_TIME,
      onChange: ::this.onCountDownChange,
      onDone: ::this.onCountDownDone
    });
  }

  componentDidMount = () => {
    this.countdown.start();
  }

  componentWillReceiveProps = (props) => {
    this.rules[props.timer]();
  }

  componentWillUnmount = () => {
    this.countdown.stop();
  }

  onCountDownChange = (data) => {
    this.setState(data);
  }

  onCountDownDone = (data) => {
    matchActions.overtime();
  }

  render = () => {
    let { minutes, seconds, milliseconds, percentage } = this.state;
    return (
        <div className='c-timer'>
          <strong className='c-timer__value'>{ minutes }:{ seconds }:{ milliseconds }</strong>
          <ProgressBar percentage={ percentage } isEnding={ seconds <= 3 } />
        </div>
    );
  }

}
