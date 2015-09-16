import appDispatcher from '../dispatcher/app-dispatcher';
import { EventEmitter } from 'events';
import createArray from '../helpers/create-array';
import flipCoin from '../helpers/flip-coin';

export default new class FieldsStore extends EventEmitter {
  static size = 5
  static fields = []

  constructor() {
    super();
    this.create();
  }

  create = () => {
    FieldsStore.fields = createArray(FieldsStore.size).map(() => {
      return {
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

  getAll = () => {
    return FieldsStore.fields;
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
