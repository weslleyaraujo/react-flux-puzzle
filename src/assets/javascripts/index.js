import React from 'react';
import Board from './views/board';
import Options from './views/options';
import ProgressBar from './views/progress-bar';
import Startup from './views/startup';

class App extends React.Component {
  render = () => {
    return (
      <div className='c-flex-container'>
        <Startup />
      </div>
    )
  }
}


React.render(<App />, document.getElementById('app'));
