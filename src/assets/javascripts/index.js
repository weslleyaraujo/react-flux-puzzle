import Rx from 'rx';
import React from 'react';
import ReactDOM from 'react-dom';

import stateStore from './store/state-store';
import App from './components/app';

stateStore.subscribe((store) => {
  console.log('component update store: ', store);
  // ReactDOM.render(<App store={store} />, document.getElementById('app'));
});
