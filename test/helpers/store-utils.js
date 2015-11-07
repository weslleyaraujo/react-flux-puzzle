import { expect, assert } from 'chai';
import * as utils from '../../src/assets/js/helpers/store-utils'

let store;

describe('store utils', () => {

  beforeEach(() => {
    store = utils.getSchema();
  });

  describe('getSchema', () => {
    it('should return default the store store', () => {
      expect(store.get('fields').toJSON()).to.be.a('array');
      expect(store.get('options').toJSON()).to.be.a('array');
      expect(store.get('options').first().get('lines').size).to.equal(5);
    });

    it('should return the store store with the numbers arguments itens', () => {
      const SIZE = 10;
      store = utils.getSchema(10);
      expect(store.get('options').size).to.equal(SIZE);
    });
  });

  describe('getHead', () => {
    it('should get the first item of the fields', () => {
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


});

