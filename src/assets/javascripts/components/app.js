import React, { Component } from 'react';

import Startup from './startup';
import Game from './game';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          <Startup store={this.props.store} />
          <Game store={this.props.store} />
        </div>
    )
  }
}
