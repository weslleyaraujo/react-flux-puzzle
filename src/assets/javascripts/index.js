import Rx from 'rx';
import React from 'react';
import ReactDOM from 'react-dom';

import gameStore from './store/game-store';
import userStore from './store/user';
import App from './components/app';


window.x = gameStore;
window.y = userStore;
window.Rx = Rx;

gameStore.subject.subscribe((store) => {
  console.log('from component', store);
  ReactDOM.render(<App store={store} />, document.getElementById('app'));
});
