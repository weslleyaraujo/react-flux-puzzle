import { expect, assert } from 'chai';
import { spy } from 'sinon';
import { matchActions, matchSubjects } from '../../src/assets/js/actions/match'

import { Subject } from 'rx';

let subjectNames = Object.keys(matchSubjects);

describe('match', () => {
  it('make sure that "matchSubjects" are instances of Rx.Subject',() => {
    subjectNames.forEach(x => assert.instanceOf(matchSubjects[x], Subject));
  });

  describe('trial', () => {
    it('calls onNext from trial with argument id',() => {
      let onNextSpy = spy(matchSubjects.trial, 'onNext');
      let id = 'foo';

      matchActions.trial({ id });
      expect(onNextSpy.calledWith(id)).to.be.ok;
    });

    it('throws an exception if the argument id is not passed', () => {
      expect(matchActions.trial.bind(null, 'foo')).to.throw(Error);
    });

  });

  describe('start', () => {
    it('calls onNext from start',() => {
      let onNextSpy = spy(matchSubjects.start, 'onNext');

      matchActions.start();
      expect(onNextSpy).to.be.called;
    });
  });

  describe('overtime', () => {
    it('calls onNext from overtime',() => {
      let onNextSpy = spy(matchSubjects.overtime, 'onNext');

      matchActions.overtime();
      expect(onNextSpy).to.be.called;
    });
  });

});

