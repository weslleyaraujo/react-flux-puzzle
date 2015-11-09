import { expect, assert } from 'chai';
import { spy } from 'sinon';

import stateStore from '../../src/assets/js/store/state-store'
import { matchActions } from '../../src/assets/js/actions/match'


describe('state-store', () => {
  it('calls subscribe after store is modified',() => {
    const subscribeSpy = spy(stateStore, 'subscribe');

    matchActions.trial({ id: 'foo' });
    expect(subscribeSpy).to.be.called;

    matchActions.start();
    expect(subscribeSpy).to.be.called;

    matchActions.overtime();
    expect(subscribeSpy).to.be.called;
  });

});

