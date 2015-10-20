import Rx from 'rx';

import matchActions from '../actions/match';
import userStore from './user';

let store = {game: true};
let gameSubject = new Rx.BehaviorSubject(store);

matchActions.subjects.trial.subscribe((id) => {
  gameSubject.onNext(store);
});

Rx.Observable.combineLatest(
    gameSubject,
    userStore.subject,
    (x, a) => {
      return { x, a }
    })
    .subscribe((store) => {
      console.log(store);
    });

// Rx.Observable.combineLatest(subject, userStore.subject, function (a, b) { console.log('lol', a, b);
//   return { a: a, b: b }
// }).subscribe(function (store) { console.log('exec', store); } )

export default { subject };

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
