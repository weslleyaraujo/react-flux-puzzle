import Rx from 'rx';
import _ from 'underscore';

import matchActions from '../actions/match';
import userStore from './user';
import fieldsStore from './fields';

let store = {game: true};
let gameSubject = new Rx.BehaviorSubject(store);

function isGameOver(user) {
  return user.status.lose;
}


function isMatch(fields, id) {
  return fields.filter((field) => asdf) === id;
}

// multiple actions
// shared utils functions


matchActions.subjects.trial.subscribe((id) => {

  let { status } = userStore.subject.getValue();
  if (isGameOver()) {
    return;
  }

  gameSubject.onNext(store);
});

window.fieldsStore = fieldsStore;
window.userStore = userStore;
window.matchActions = matchActions;

export default Rx.Observable.combineLatest(
    gameSubject,
    userStore.subject,
    fieldsStore.subject,
    (...data) => data.reduce((c, x) => c = _.extend(c, x), {}));

