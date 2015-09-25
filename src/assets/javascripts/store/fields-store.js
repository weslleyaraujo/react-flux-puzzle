import appDispatcher from '../dispatcher/app-dispatcher';
import createArray from '../helpers/create-array';
import flipCoin from '../helpers/flip-coin';
import _ from 'underscore';

import { uniqueId } from 'underscore';
import { EventEmitter } from 'events';

export default new class FieldsStore extends EventEmitter {
  static size = 10
  static lines = 5
  static fields = []

  constructor() {
    super();

    this.create();
    this.bind();
  }

  set all(value) {
    return FieldsStore.fields = value;
  }

  get all() {
    return FieldsStore.fields;
  }


  get nextGuess() {
    return _(this.all)
      .chain()
      .where({ isMatched: false })
      .first()
      .value();
  }

  create = () => {
    this.all = createArray(FieldsStore.size).map(() => {
      return {
        id: uniqueId(),
        isMatched: false,
        lines: createArray(FieldsStore.lines).map(() => {
          return createArray(FieldsStore.lines).map(() => {
            return {
              active: flipCoin()
            }
          })
        })
      }
    });
  }

  bind = () => {
      appDispatcher.register((action) => {
        switch (action.actionType) {
          case 'TRIAL': this.onActionTrial(action); break;
        }
      });
  }

  onActionTrial = (action) => {
    console.log('is a match?', this.isMatched(action.id));
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
