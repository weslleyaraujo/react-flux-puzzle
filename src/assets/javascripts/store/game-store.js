import Rx from 'rx';
import { fromJS, Map } from 'immutable';
import { shuffle, compose } from 'underscore';

import matchActions from '../actions/match';
import createFields from '../helpers/create-fields';
import * as utils from '../helpers/store-utils';

const SIZE = 5;

let getSchema = (lines = 5, level = 0) => {
  let fields = fromJS(createFields(lines, SIZE));
  return Map({
    level,
    fields,
    missed: false,
    timer: 'default',
    status: 'initial',
    options: shuffle(fields)
  });
}

let store = getSchema();
let subject = new Rx.BehaviorSubject(store);

// NOTE: action to clear flag time
// NOTE: validate the level in time component to increase values whenever user wins

matchActions.subjects.trial.subscribe((id) => {

  let result = compose(
    utils.setWinner,
    utils.setTimer,
    utils.setMatched
  );

  store = result(store, id);
  subject.onNext(store);
});

// NOTE: just for test
window.matchActions = matchActions;
window.store = store;

export default subject;
