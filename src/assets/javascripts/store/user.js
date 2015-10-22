import Rx from 'rx';

import * as utils from '../helpers/store-utils';
import matchActions from '../actions/match';

let getSchema = () => {
  return {
    level: 0,
    wins: 0,
    lines: 5,
    size: 5,
    status: {
      win: false,
      lose: false,
      playing: false,
    },
  }
};

let store = getSchema();
let subject = new Rx.BehaviorSubject(store);

// matchActions.subjects.trial.subscribe((id) => {
//
//   let { fields } = fieldsStore.subject.getValue();
//
//   if (utils.isWinner(fields)) {
//     store = setWinner(store);
//   }
//
//   subject.onNext(store);
//
// });

export default { subject };

