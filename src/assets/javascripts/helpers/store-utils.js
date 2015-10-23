import createFields from '../helpers/create-fields';
import { fromJS, Map } from 'immutable';
import { shuffle } from 'underscore';

const SIZE = 5;

export function getSchema(lines = 5, level = 0) {
  let fields = fromJS(createFields(lines, SIZE));
  return Map({
    level,
    fields,
    missed: false,
    timer: 'default',
    status: 'initial',
    options: shuffle(fields)
  });
}

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
  let head = getHead(store);
  let matched = isMatched(store, id);

  return store.set('missed', !matched).set('fields', store.get('fields').map((f) => {
    return f.set('isMatched', f.get('id') === id && matched ? true : f.get('isMatched'));
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

export function setPlaying(store) {
  return store.set('status', 'playing');
}

