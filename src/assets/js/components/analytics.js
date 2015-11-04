import React, { Component } from 'react';

export default class Analytics extends Component {

  displayName: 'Analytics'

  constructor(props) {
    super(props);
  }

  // NOTE: not really happy with this implementation,
  // should refactor it.
  componentWillReceiveProps = (props) => {
    props.store.get('timer') === 'upgrade' && this.track('game', 'level-up', props.store.get('level'));
    props.store.get('status') === 'gameover' && this.track('game', 'gameover', props.store.get('level'));
  }

  track = (name, label, value) => {
    window.ga && window.ga('send', 'event', name, label, value);
  }

  render = () => {
    return (null);
  }
}
