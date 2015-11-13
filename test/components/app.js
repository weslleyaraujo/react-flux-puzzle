import React from 'react';
import { expect, assert } from 'chai';
import { spy } from 'sinon';

import renderElementWithProps from '../test-utils/render-element-with-props';

import App from '../../src/assets/js/components/app';
import Audio from '../../src/assets/js/components/audio';

import { sounds, soundsSrc, getSound } from '../../src/assets/js/helpers/get-sound';
import { getSchema } from '../../src/assets/js/helpers/store-utils';

let component;
let store = getSchema();
let firstSound = Object.keys(sounds)[0];

describe('app', () => {
  beforeEach(() => {
    component = renderElementWithProps(<App store={store} />);
  });

  it('renders a bunch of components',() => {
    expect(component.output.props.children.length).not.to.be.null;
  });

  it('renders audio with proper values',() => {
    store = store.set('sound', firstSound);
    component = renderElementWithProps(<App store={store} />);
    let audio = component.element.findComponent({ type: Audio });
    expect(audio.props.play).to.equal(getSound(firstSound));
  });

});

