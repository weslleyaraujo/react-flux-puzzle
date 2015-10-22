import createFields from '../helpers/create-fields';
import { shuffle } from 'underscore';

export function getHead (fields) {
  return fields.filter((f) => !f.isMatched)[0];
}

export function isMatched(head, id) {
  return head.id === id;
}

export function setMatched(fields, id) {
  return fields.map((f) => {
    f.isMatched = f.id === id ? true : f.isMatched;
    return f;
  });
}

export function isWinner(fields) {
  return !getHead(fields);
}

export function setWinner(user) {
  return user;
}

