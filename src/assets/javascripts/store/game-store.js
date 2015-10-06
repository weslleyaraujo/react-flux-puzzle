import _ from 'underscore';
import moment from 'moment';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import countdown from '../helpers/countdown';
import getStoreSchema from '../helpers/get-store-schema';
import { EventEmitter as Events } from 'events';

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

  get isGameOver() {
    return this.data.game.status.lose;
  }

  get headField() {
    return _(this.data.fields)
      .chain()
      .where({ isMatched: false })
      .first()
      .value();
  }

  bind = () => {
      appDispatcher.register((action) => {
        switch (action.actionType) {
          case 'TRIAL': this.actionHandler(this.onActionTrial, action); break;
          case 'START': this.actionHandler(this.onActionStart, action); break;
        }
      });
  }

  prepare = () => {
    // reset countdown it is enable
    this.countdown && this.countdown.stop();
    this.data = getStoreSchema();
    this.rebuild();
    this.countdown = countdown(4000 * 10, this.onCountDownChange, this.onCountDownDone);
  }

  actionHandler = (fn, action) => {
    fn(action);
    this.emitChange();
  }

  rebuild = () => {
    this.data.fields = createFields(this.data.game.lines, this.data.game.size);
    this.data.options = _.shuffle(this.data.fields);
  }

  onActionStart = (action) => {
    this.prepare();
    this.data.game.isPlaying = true;
    this.countdown.start();
  }

  stopCountDown = () => {
    this.countdown.stop();
  }

  onCountDownDone = () => {
    this.setGameOver();
  }

  onCountDownChange = (data) => {
    this.data.game.timer = data;
    this.emitChange();
  }

  onActionTrial = (action) => {
    if (this.isGameOver) {
      return;
    }

    if (this.isMatched(action.id)) {
      this.setMatched();
      this.isWinner && this.setWinner();
      return;
    }

    this.countdown.decrease(10);
  }

  setWinner = () => {
    this.data.game.wins++;
    this.increaseLevel();
    this.increaseTime();
    this.rebuild();
    this.emitChange();
  }

  increaseTime = () => {
    this.countdown.add(10);
  }

  increaseLevel = () => {
    this.data.game.level++;
    this.data.game.lines++;
  }

  get isWinner() {
    return !this.headField
  }

  setStart = () => {
    this.prepare();
  }

  setGameOver = () => {
    this.data.game.status.lose = true;
    this.stopCountDown();
  }

  setMatched = () => {
    this.headField.isMatched = true;
  }

  isMatched = (id) => {
    return this.headField.id === id;
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
