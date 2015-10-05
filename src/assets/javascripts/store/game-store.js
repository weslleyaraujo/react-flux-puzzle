import _ from 'underscore';
import moment from 'moment';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import countdown from '../helpers/countdown';
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

  data = {}

  get isGameOver() {
    return this.data.game.status.lose;
  }

  get nextFieldGuess() {
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
    this.data = {
      fields: [],
      game: {
        timer: {
          minutes: '00',
          seconds: '00',
          milliseconds: '000',
          percentage: 100
        },
        status: {
          win: false,
          lose: false
        },
        level: 0,
        wins: 0,
        lines: 5,
        size: 5,
      }


    }

    this.data.fields = createFields(this.data.game.lines, this.data.game.size);
    this.data.options = _.shuffle(this.data.fields);
    this.countdown = countdown(4000 * 10, this.onCountDownChange, this.onCountDownDone);
  }

  actionHandler = (fn, action) => {
    fn(action);
    this.emitChange();
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
    alert('win');
    // remove it
    this.stopCountDown();
  }

  get isWinner() {
    return !this.nextFieldGuess
  }

  setStart = () => {
    this.prepare();
  }

  setGameOver = () => {
    this.data.game.status.lose = true;
    this.stopCountDown();
  }

  setMatched = () => {
    this.nextFieldGuess.isMatched = true;
  }

  isMatched = (id) => {
    return this.nextFieldGuess.id === id;
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
