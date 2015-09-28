import React from 'react';
import Board from './views/board';
import Options from './views/options';
import Timer from './views/timer';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Board />
        <Options />
        <Timer />
      </div>
    )
  }
}


React.render(<App />, document.getElementById('app'));
