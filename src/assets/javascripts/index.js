import React from 'react';
import Startup from './components/startup';
import Game from './components/game';

class App extends React.Component {
  render = () => {
    return (
      <div className='c-flex-container'>
        <Startup />
        <Game />
      </div>
    )
  }
}


React.render(<App />, document.getElementById('app'));
