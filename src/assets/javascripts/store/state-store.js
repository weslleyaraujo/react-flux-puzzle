import Rx from 'rx';
import { compose } from 'underscore';

import matchActions from '../actions/match';
import * as utils from '../helpers/store-utils';

let store = utils.getSchema();
let subject = new Rx.BehaviorSubject(store);

// NOTE: action to clear flag time from timer component
// NOTE: validate the level in time component to increase values
//       whenever user wins (save a state flag in the component or something for it)

matchActions.subjects.trial.subscribe((id) => {
  let mixer = compose(
    utils.setWinner,
    utils.setTimer,
    utils.setMatched
  );

  store = mixer(store, id);
  subject.onNext(store);
});

matchActions.subjects.start.subscribe(() => {
  let mixer = compose(utils.setPlaying);
  store = mixer(utils.getSchema());
  subject.onNext(store);
});

export default subject;
