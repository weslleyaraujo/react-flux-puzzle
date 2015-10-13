import { uniqueId, range } from 'underscore';

import flipCoin from '../helpers/flip-coin';

export default function (size, lines) {
  return range(size).map(() => {
    return {
      id: uniqueId(),
      isMatched: false,
      lines: range(lines).map(() => {
        return range(lines).map(() => {
          return {
            active: flipCoin()
          }
        })
      })
    }
  })
}

