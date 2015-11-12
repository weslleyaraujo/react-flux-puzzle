import { expect, assert } from 'chai';
import * as utils from '../../src/assets/js/helpers/store-utils';

let store;

describe('store-utils', () => {

  beforeEach(() => {
    store = utils.getSchema();
  });

  describe('getSchema', () => {
    it('should return default the store schema', () => {
      expect(store.get('fields').toJSON()).to.be.a('array');
      expect(store.get('options').toJSON()).to.be.a('array');
      expect(store.get('options').first().get('lines').size).to.equal(5);
    });

    it('should return the store with the "options" field with the same size as the arguments passed', () => {
      const SIZE = 10;
      store = utils.getSchema(10);
      expect(store.get('options').size).to.equal(SIZE);
    });
  });

  describe('getHead', () => {
    it('should get the first item unmatched of the fields', () => {
      let head = utils.getHead(store);
      expect(head).to.equal(store.get('fields').first());
    });

    it('should get the first occurence of a field with property isMatched as false', () => {
      store = store.setIn(['fields', 0, 'isMatched'], true);
      let head = utils.getHead(store);
      expect(head).to.equal(store.get('fields').get(1));
    });
  });

  describe('isMatched', () => {
    it('returns true when second argument is the same as the head id', () => {
      let head = utils.getHead(store);
      expect(utils.isMatched(store, head.get('id'))).to.be.true;
    });

    it('returns false when second argument is different as the head id', () => {
      let second = store.get('fields').get(1);
      expect(utils.isMatched(store, second.get('id'))).to.be.false;
    });
  });

  describe('setMatched', () => {
    it('set the field with the passed id as matched', () => {
      let firstId = store.get('fields').first().get('id');
      store = utils.setMatched(store, firstId);
      expect(store.get('fields').first().get('isMatched')).to.be.true;
      expect(store.get('fields').get(1).get('isMatched')).to.be.false;
    });
  });

  describe('setTimer', () => {
    it('set timer to "increase" if the flag "missed" is set to false', () => {
      store = utils.setTimer(store);
      expect(store.get('timer')).to.equal('increase');
    });

    it('set timer to "decrease" if the flag "missed" is set to true', () => {
      store = store.set('missed', true);
      store = utils.setTimer(store);
      expect(store.get('timer')).to.equal('decrease');
    });
  });

  describe('isWinner', () => {
    it('returns true if all the fields are set with the flag "isMatched" as true', () => {
      let fields  = store.get('fields').map(x => x.set('isMatched', true));
      store = store.set('fields', fields);
      expect(utils.isWinner(store)).to.be.true;
    });

    it('returns false if any of the fields are set with the flag "isMatched" as false', () => {
      expect(utils.isWinner(store)).to.be.false;
    });
  });

  describe('setPlaying', () => {
    it('set the status to "playing"', () => {
      store = utils.setPlaying(store);
      expect(store.get('status')).to.equal('playing');
    });
  });

  describe('setGameOver', () => {
    it('set the status to "gameover"', () => {
      store = utils.setGameOver(store);
      expect(store.get('status')).to.equal('gameover');
    });
  });

  describe('setSound', () => {
    it('set the sound to "gameover" if the status is also "gameover"', () => {
      store = utils.setGameOver(store);
      store = utils.setSound(store);
      expect(store.get('sound')).to.equal('gameover');
    });

    it('set the sound to "missed" if the flag missed is setted to true', () => {
      store = store.set('missed', true);
      store = utils.setSound(store);
      expect(store.get('sound')).to.equal('missed');
    });

    it('set the sound to "scored" if the flag missed is setted to false', () => {
      store = store.set('missed', false);
      store = utils.setSound(store);
      expect(store.get('sound')).to.equal('scored');
    });
  });

});

