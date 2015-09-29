import _ from 'underscore';

import appDispatcher from '../dispatcher/app-dispatcher';
import createFields from '../helpers/create-fields';
import { EventEmitter as Events } from 'events';

export default new class GameStore extends Events {

  constructor() {
    super();

    this.all = createFields(this.data.game.lines, this.data.game.size);
    this.bind();
  }

  data = {
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

  set all(value) {
    return this.data.fields = value;
  }

  get all() {
    return this.data.fields;
  }

  get nextGuess() {
    return _(this.all)
      .chain()
      .where({ isMatched: false })
      .first()
      .value();
  }

  bind = () => {
      appDispatcher.register((action) => {
        switch (action.actionType) {
          case 'TRIAL': this.onActionTrial(action); break;
        }
      });
  }

  onActionTrial = (action) => {
    if (this.isMatched(action.id)) {
      this.setMatched();
    }

    /*
     * TODO: game over!
     */
    this.emitChange();

  }

  setMatched = () => {
    this.nextGuess.isMatched = true;
  }

  isMatched = (id) => {
    return this.nextGuess.id === id;
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
