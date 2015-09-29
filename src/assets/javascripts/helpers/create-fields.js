import createArray from './create-array';
import flipCoin from '../helpers/flip-coin';
import { uniqueId } from 'underscore';

export default function (size, lines) {
  return createArray(size).map(() => {
    return {
      id: uniqueId(),
      isMatched: false,
      lines: createArray(lines).map(() => {
        return createArray(lines).map(() => {
          return {
            active: flipCoin()
          }
        })
      })
    }
  })
}

