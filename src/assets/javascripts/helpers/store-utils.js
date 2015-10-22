import createFields from '../helpers/create-fields';
import { shuffle } from 'underscore';

export function getHead(store) {
  return store.get('fields')
    .filter(f => !f.get('isMatched'))
    .first();
}

export function isMatched(store, id) {
  let head = getHead(store);
  return head ? head.get('id') === id : false;
}


export function setMatched(store, id) {
  return store.set('missed', !isMatched(store, id)).set('fields', store.get('fields').map((f) => {
    return f.set('isMatched', f.get('id') === id);
  }));
}

export function setTimer(store) {
  return store.set('timer', store.get('missed') ? 'decrease': 'increase');
}

export function isWinner(store) {
  return !getHead(store);
}

export function setWinner(store) {
  let level = store.get('level');
  let timer = store.get('timer');
  let winner = isWinner(store);

  store.merge({
    level: winner ? (level + 1) : level,
    timer: winner ? 'upgrade' : timer
  });

  return store.set('level', isWinner(store) ? (level + 1) : level);
}
