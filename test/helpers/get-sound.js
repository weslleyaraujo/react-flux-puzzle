import { expect, assert } from 'chai';
import { getSound, soundsSrc, sounds } from '../../src/assets/js/helpers/get-sound'

let first = Object.keys(sounds)[0];
describe('get-sound', () => {

  describe('getSound', () => {
    it('returns a song if it matchs the songs list',() => {
      let sound = getSound(first);
      expect(sound).to.be.a('string');
    });

    it('returns the correct sound',() => {
      let sound = getSound(first);
      expect(sounds[first]).to.equal(sound);
    });

    it('throws an error if the sound is not find',() => {
      expect(getSound.bind(null, 'foo')).to.throw(Error);
    });
  });

});

