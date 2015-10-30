import Rx from 'rx';
import { compose } from 'underscore';

import matchActions from '../actions/match';
import * as utils from '../helpers/store-utils';

let store = utils.getSchema();
let subject = new Rx.BehaviorSubject(store);

matchActions.subjects.trial.subscribe((id) => {
  let mixer = compose(
    utils.setWinner,
    utils.setSong,
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

matchActions.subjects.overtime.subscribe(() => {
  let mixer = compose(
      utils.setSong,
      utils.setGameOver
  );

  store = mixer(store);
  subject.onNext(store);
});

export default subject;
