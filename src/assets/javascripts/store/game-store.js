import _ from 'underscore';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import { EventEmitter as Events } from 'events';

export default new class GameStore extends Events {

  constructor() {
    super();
    this.prepare();
    this.bind();
  }

  data = {}

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
        }
      });
  }

  prepare = () => {
    this.data = {
      fields: [],
      game: {
        isPlaying: false,
        lose: false,
        level: 0,
        wins: 0,
        lines: 5,
        size: 5,
      }
    }

    this.data.fields = createFields(this.data.game.lines, this.data.game.size);
  }

  actionHandler = (fn, action) => {
    fn(action);
    this.emitChange();
  }

  onActionTrial = (action) => {
    if (this.isMatched(action.id)) {
      this.setMatched();
      // does the user win?
      return;
    }

    this.setGameOver();
  }

  setGameOver = () => {
    this.data.game.lose = true;
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
