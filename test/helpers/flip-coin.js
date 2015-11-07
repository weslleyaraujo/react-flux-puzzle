import { expect, assert } from 'chai';
import flipCoin from '../../src/assets/js/helpers/flip-coin'

describe('flip-coin', () => {
  it('returns a boolean value',() => {
    let result = flipCoin();
    expect(result).to.be.a('boolean');
  });
});

