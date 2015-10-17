import _ from 'underscore';
import moment from 'moment';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import countdown from '../helpers/countdown';
import { EventEmitter as Events } from 'events';

import fieldsStore from './fields';
import userStore from './user';
import timerStore from './timer';

export default new class GameStore extends Events {

  constructor() {
    super();
    this.data = this.getStoreSchema();
    this.bind();
  }

  data = {}

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
    this.data = this.getStoreSchema();
    fieldsStore.rebuild();
  }

  getStoreSchema = () => {
    return _.extend(fieldsStore.data, timerStore.data, userStore.data);
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
      fieldsStore.setMatched();
      userStore.isWinner() && userStore.setWinner();
      timerStore.countdown.add(2);
      return;
    }

    timerStore.countdown.decrease(10);
  }

  addChangeListener = (callback) => {
    this.on('change', callback);
  }

  emitChange = () => {
    this.data = this.getStoreSchema();
    this.emit('change');
  }
}
