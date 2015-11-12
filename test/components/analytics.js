import React from 'react';
import { expect, assert } from 'chai';
import sd from 'skin-deep';

import Analytics from '../../src/assets/js/components/analytics'
import { getSchema } from '../../src/assets/js/helpers/store-utils';

function renderElementWithProps(component) {
  let element = sd.shallowRender(component);
  let instance = element.getMountedInstance();

  return {
    element,
    instance
  }
}

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
    // console.log(component.instance.track);
    console.log(component.instance.setProps);
    // expect(component.element.getRenderOutput()).to.be.null;
  });

});

