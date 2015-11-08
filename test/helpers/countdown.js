import { expect, assert } from 'chai';
import { spy } from 'sinon';
import Countdown from '../../src/assets/js/helpers/countdown'

let countdown;
let onChangeSpy = spy();

describe('coundtown', () => {
  beforeEach((done) => {
    countdown = new Countdown({
      duration: 10,
      onChange: onChangeSpy,
      onDone: done
    });

    countdown.start();

  });

  describe('bind', () => {
    it('should have called onChangeCallback', () => {
      expect(onChangeSpy).to.be.called;
    });

    it('will call onDone callback', () => {
      let onDoneSpy = spy();
      countdown = new Countdown({
        duration: 10,
        onChange: () => {},
        onDone: onDoneSpy
      });

      expect(onDoneSpy).to.be.called;
    });
  });


  describe('getData', () => {
    it('returns a formated object with countdown information',() => {
      let data = countdown.getData(10, 10);
      expect(data.percentage).to.equal(100);
      expect(data.minutes).to.equal('00');
      expect(data.seconds).to.equal('00');
      expect(data.milliseconds).to.equal('010');
    });
  });

  describe('decrease', () => {
    it('decreases timer ms',() => {
      countdown = new Countdown({
        duration: 10,
        onChange: () => {},
        onDone: () => {}
      });

      let value = countdown.timer.ms;
      countdown.decrease(10);
      expect(countdown.timer.ms < value).to.be.true;
    });
  });

  describe('add', () => {
    it('adds value into the timer',() => {
      countdown = new Countdown({
        duration: 10,
        onChange: () => {},
        onDone: () => {}
      });

      countdown.add(10);
      expect(countdown.options.duration > 10).to.be.true;
    });
  });

});

