import _ from 'underscore';
import moment from 'moment';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import countdown from '../helpers/countdown';
import getStoreSchema from '../helpers/get-store-schema';
import { EventEmitter as Events } from 'events';

import fieldsStore from './fields';
import userStore from './game';
import timerStore from './timer';

export default new class GameStore extends Events {

  constructor() {
    super();
    /*
     * TODO: rethink about prepare here
     */
    this.prepare();
    this.bind();
  }

  data = getStoreSchema()

  bind = () => {
      appDispatcher.register((action) => {
        switch (action.actionType) {
          case 'TRIAL': this.actionHandler(this.onActionTrial, action); break;
          case 'START': this.actionHandler(this.onActionStart, action); break;
        }
      });
  }

  prepare = () => {
    timerStore.stop();
    this.data = getStoreSchema(); // will be removed
    fieldsStore.rebuild();
    timerStore.start();
  }

  actionHandler = (fn, action) => {
    fn(action);
    this.emitChange();
  }

  onActionStart = (action) => {
    this.prepare();
    userStore.start();
    timerStore.start();
  }

  onActionTrial = (action) => {
    if (userStore.isGameOver()) {
      return;
    }

    if (fieldsStore.isMatched(action.id)) {
      userStore.setMatched();
      userStore.isWinner && userStore.setWinner();
      timerStore.countdown.add(2);
      return;
    }

    timerStore.countdown.decrease(10);
  }

  addChangeListener = (callback) => {
    this.on('change', callback);
  }

  removeChangeListener = (callback) => {
    this.removeChangeListener('change', callback);
  }

  emitChange = () => {
    this.emit('change');
  }
}
