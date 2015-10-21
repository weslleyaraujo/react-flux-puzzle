import Rx from 'rx';
import React from 'react';
import ReactDOM from 'react-dom';

import gameStore from './store/game-store';
import App from './components/app';

gameStore.subscribe((store) => {
  console.log('from component', store);
  // ReactDOM.render(<App store={store} />, document.getElementById('app'));
});
