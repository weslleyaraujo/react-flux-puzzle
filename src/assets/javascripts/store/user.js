import Rx from 'rx';

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

export default { subject };

