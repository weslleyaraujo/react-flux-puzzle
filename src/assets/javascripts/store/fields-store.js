import appDispatcher from '../dispatcher/app-dispatcher';
import createArray from '../helpers/create-array';
import flipCoin from '../helpers/flip-coin';
import _ from 'underscore';

import { uniqueId } from 'underscore';
import { EventEmitter } from 'events';

export default new class FieldsStore extends EventEmitter {
  static size = 5
  static fields = []

  constructor() {
    super();

    this.prepare();
    this.bind();
  }

  prepare = () => {
    FieldsStore.fields = createArray(FieldsStore.size).map(() => {
      return {
        id: uniqueId(),
        isMatched: false,
        lines: createArray(FieldsStore.size).map(() => {
          return createArray(FieldsStore.size).map(() => {
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

  get nextGuess() {
    return _(FieldsStore.fields)
      .chain()
      .where({ isMatched: false })
      .first()
      .value();
  }

  get all() {
    return FieldsStore.fields;
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
