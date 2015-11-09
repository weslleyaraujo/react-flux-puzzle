import Rx from 'rx';

const matchSubjects = ['trial', 'start', 'overtime'].reduce((c, x) => {
  c[x] = new Rx.Subject();
  return c;
}, {});

const matchActions = {
  trial({ id }) {
    if (id) {
      matchSubjects.trial.onNext(id);
      return;
    }

    throw new Error('trial action cant be dispactched, parameter "id" was not set');
  },

  start() {
    matchSubjects.start.onNext();
  },

  overtime() {
    matchSubjects.overtime.onNext();
  },
}

export { matchActions, matchSubjects };
