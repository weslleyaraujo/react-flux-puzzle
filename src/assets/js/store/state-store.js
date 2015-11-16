import Rx from 'rx';
import { compose } from 'underscore';

import { matchSubjects } from '../actions/match';
import * as utils from '../helpers/store-utils';

let store = utils.getSchema();
let subject = new Rx.BehaviorSubject(store);

matchSubjects.trial.subscribe((id) => {
  let mixer = compose(
    utils.setWinner,
    utils.setSound,
    utils.setTimer,
    utils.setMatched
  );

  store = mixer(store, id);
  subject.onNext(store);
});

matchSubjects.start.subscribe(() => {
  let mixer = compose(utils.setPlaying);
  store = mixer(utils.getSchema());
  subject.onNext(store);
});

matchSubjects.overtime.subscribe(() => {
  let mixer = compose(
      utils.setSound,
      utils.setGameOver
  );

  store = mixer(store);
  subject.onNext(store);
});

export default subject;
