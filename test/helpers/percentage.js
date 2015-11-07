import { expect, assert } from 'chai';
import percentage from '../../src/assets/js/helpers/percentage'

describe('percentage', () => {
  it('returns the a number as the value',() => {
    expect(percentage(10, 100)).to.be.a('number');
  });

  it('returns the correct percentage value',() => {
    expect(percentage(10, 100)).to.equal(10);
    expect(percentage(5, 50)).to.equal(10);
  });

});

