import Rx from 'rx';

const subjects = ['trial', 'start'].reduce((c, x) => {
  c[x] = new Rx.Subject();
  return c;
}, {});

export default {
  trial(row) {
    subjects.trial.onNext(row.id);
  },

  start() {
    subjects.start.onNext();
  }
}
