import { expect, assert } from 'chai';
import pad from '../../src/assets/js/helpers/pad'

describe('pad', () => {
  it('returns a value with the correct length',() => {
    let value = pad(10, 2);
    expect(value).to.have.length(2);

    value = pad(10, 3);
    expect(value).to.have.length(3);
  });

  it('returns pad value with "0" as the first character',() => {
    let value = pad(1, 2);
    expect(value[0]).to.equal('0');
  });

  it('returns a pad value the first value as the argument passed',() => {
    let value = pad(1, 2, 'F');
    expect(value[0]).to.equal('F');
  });

});

