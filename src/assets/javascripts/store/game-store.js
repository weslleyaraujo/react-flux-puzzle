import Rx from 'rx';
import _ from 'underscore';

import matchActions from '../actions/match';
import userStore from './user';
import fieldsStore from './fields';

let store = {game: true};
let gameSubject = new Rx.BehaviorSubject(store);

matchActions.subjects.trial.subscribe((id) => {

  let { status } = userStore.subject.getValue();
  if (status.lose) {
    return;
  }

  gameSubject.onNext(store);
});

export default Rx.Observable.combineLatest(
    gameSubject,
    userStore.subject,
    fieldsStore.subject,
    (...data) => data.reduce((c, x) => c = _.extend(c, x), {}));

// export default new class GameStore extends Events {
//
//   constructor() {
//     super();
//     this.data = this.getStoreData();
//     this.bind();
//   }
//
//   data = {}
//
//   bind = () => {
//       appDispatcher.register((action) => {
//         switch (action.actionType) {
//           case 'TRIAL': this.actionHandler(this.onActionTrial, action); break;
//           case 'START': this.actionHandler(this.onActionStart, action); break;
//         }
//       });
//   }
//
//   prepare = () => {
//     timerStore.stop();
//     this.data = this.getStoreData();
//     fieldsStore.rebuild();
//   }
//
//   getStoreData = () => {
//     return _.extend(fieldsStore.data, timerStore.data, userStore.data);
//   }
//
//   actionHandler = (fn, action) => {
//     fn(action);
//     this.emitChange();
//   }
//
//   onActionStart = (action) => {
//     this.prepare();
//     userStore.start();
//     timerStore.start(this.emitChange);
//   }
//
//   onActionTrial = (action) => {
//     if (userStore.isGameOver()) {
//       return;
//     }
//
//     if (fieldsStore.isMatched(action.id)) {
//       fieldsStore.setMatched();
//       userStore.isWinner() && userStore.setWinner();
//       timerStore.countdown.add(2);
//       return;
//     }
//
//     timerStore.countdown.decrease(10);
//   }
//
//   addChangeListener = (callback) => {
//     this.on('change', callback);
//   }
//
//   emitChange = () => {
//     this.data = this.getStoreData();
//     this.emit('change');
//   }
// }
