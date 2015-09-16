import React from 'react';
import Board from './views/board';
import Options from './views/options';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Board />
        <Options />
      </div>
    )
  }
}


React.render(<App />, document.getElementById('app'));
