import React, { Component } from 'react';

export default class Audio extends Component {

  displayName: 'Audio'

  constructor(props) {
    super(props);
  }

  componentDidUpdate = () => {
    this.refs.player.play();
  }

  shouldComponentUpdate = (props) => {
    let shouldUpdate = this.props.sound !== props.sound;

    if (!shouldUpdate) {
      this.refs.player.play();
    }

    return shouldUpdate;
  }

  render = () => {
    return (
        <div>
          <audio ref='player' src={this.props.sound}></audio>
        </div>
    );
  }
}
