import React from 'react';
import { expect, assert } from 'chai';
import { spy } from 'sinon';

import renderElementWithProps from '../test-utils/render-element-with-props';

import Analytics from '../../src/assets/js/components/analytics'
import { getSchema } from '../../src/assets/js/helpers/store-utils';

let component;
let store = getSchema();

describe('analytics', () => {
  beforeEach(() => {
    component = renderElementWithProps(<Analytics props={store} />);
  });

  it('render a null element',() => {
    expect(component.element.getRenderOutput()).to.be.null;
  });

  it('calls track with the proper params',() => {
    let trackSpy = spy(component.instance, 'track');
    store = store.set('timer', 'upgrade');
    component.instance.componentWillReceiveProps({ store });
    expect(trackSpy.calledWith('game', 'level-up', store.get('level'))).to.be.ok;
  });

});

