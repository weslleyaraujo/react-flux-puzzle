import Rx from 'rx';

const subjects = ['trial', 'start', 'overtime'].reduce((c, x) => {
  c[x] = new Rx.Subject();
  return c;
}, {});

export default {
  subjects,

  trial(row) {
    subjects.trial.onNext(row.id);
  },

  start() {
    subjects.start.onNext();
  },

  overtime() {
    subjects.overtime.onNext();
  },
}
