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

// action to clear flag time
// validate the level in time component to increase values whenever user wins

window.store = store;
matchActions.subjects.trial.subscribe((id) => {

  let result = compose(
    utils.setWinner,
    utils.setTimer,
    utils.setMatched
  );

  console.log('before', store.toJSON());
  console.log('after', result(store, id).toJSON());
  // subject.onNext(result(store, id));
});

window.matchActions = matchActions;
window.compose = compose;

export default subject;
