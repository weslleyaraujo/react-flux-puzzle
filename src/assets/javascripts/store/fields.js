import Rx from 'rx';
import { shuffle } from 'underscore';

import * as utils from '../helpers/store-utils';
import createFields from '../helpers/create-fields';
import matchActions from '../actions/match';
import userStore from './user';

const size = 5;

let getSchema = (lines = 5) => {
  let fields = createFields(lines, size);
  return {
    level: 0,
    fields,
    options: shuffle(fields)
  }
};

let store = getSchema();
let subject = new Rx.BehaviorSubject(store);


matchActions.subjects.trial.subscribe((id) => {
  let head = utils.getHead(store.fields);

  if (utils.isMatched(head, id)) {
    store.fields = utils.setMatched(store.fields, id);
  }

  if (utils.isWinner(store.fields)) {
    store.level++;
    store.fields = createFields((size + store.level), size);
    store.options = shuffle(store.fields);

    console.log('point there!');
  }

  subject.onNext(store);

});

export default { subject };
