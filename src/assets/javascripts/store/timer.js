import countdown from '../helpers/countdown';
import userStore from './timer';

const INITIAL_TIME = 1000 * 10; // 10 SEC

export default new class {
  constructor() {
    this.data = this.getSchema();
  }

  getSchema = () => {
    return {
      minutes: '00',
      seconds: '00',
      milliseconds: '000',
      percentage: 100
    };
  }

  start = () => {
    this.countdown = countdown(INITIAL_TIME, this.onCountDownChange, this.onCountDownDone);
  }

  stop = () => {
    this.countdown && this.countdown.stop();
  }

  onCountDownChange = (data) => {
    this.data = data;
    // should emit change
  }

  onCountDownDone = () => {
    userStore.setGameOver();
    // should emit change
  }

  increaseTime = () => {
    this.countdown.add(10);
  }

}
