import React, { Component } from 'react';

export default class Audio extends Component {

  displayName: 'Audio'

  constructor(props) {
    super(props);
  }

  playSound = () => {
    this.props.play && this.refs[this.props.play].play();
  }

  componentDidUpdate = () => {
    this.playSound();
  }

  shouldComponentUpdate = (props) => {
    let shouldUpdate = this.props.play !== props.play;

    if (!shouldUpdate) {
      this.playSound()
    }

    return shouldUpdate;
  }

  render = () => {
    return (
        <div>
          {this.props.sounds.map((sound) =>
            <audio preload='auto' ref={sound} src={sound} key={sound}></audio>
          )}
        </div>
    );
  }
}
