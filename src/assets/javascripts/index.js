import React from 'react';
import Board from './views/board';
import Options from './views/options';
import ProgressBar from './views/progress-bar';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <ProgressBar />
        <Board />
        <Options />
      </div>
    )
  }
}


React.render(<App />, document.getElementById('app'));
