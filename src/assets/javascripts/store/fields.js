import Rx from 'rx';
import { shuffle } from 'underscore';

import createFields from '../helpers/create-fields';
import userStore from './user';

let getSchema = () => {
  let { lines, size } = userStore.subject.getValue();
  let fields = createFields(lines, size);

  return {
    fields,
    options: shuffle(fields)
  }
};

let store = getSchema();
let subject = new Rx.BehaviorSubject(store);

export default { subject };

// export default new class {
//
//   data = {}
//
//   getHead = () => {
//     return _(this.data.fields)
//       .chain()
//       .where({ isMatched: false })
//       .first()
//       .value();
//   }
//
//   rebuild = (options) => {
//     let {lines, size} = userStore.getDimensions()
//     this.data.fields = createFields(lines, size);
//     this.data.options = _.shuffle(this.data.fields);
//   }
//
//   setMatched = () => {
//     this.getHead().isMatched = true;
//   }
//
//   isMatched = (id) => {
//     return this.getHead().id === id;
//   }
// }
