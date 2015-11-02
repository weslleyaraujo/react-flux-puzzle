import React, { Component } from 'react';

export default class Audio extends Component {

  displayName: 'Audio'

  constructor(props) {
    super(props);
  }

  componentDidUpdate = () => {
    this.refs.player.play();
  }

  render = () => {
    return (
        <div>
          <audio ref='player' src={this.props.sound}></audio>
        </div>
    );
  }
}
