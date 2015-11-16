import Stopwatch from 'timer-stopwatch';
import moment from 'moment';

import percentage from './percentage';
import pad from './pad';

const decreaseSize = 1000 * 5;

export default class Countdown {
  constructor(options) {
    this.options = options;
    this.prepare();
    this.bind();
  }

  getData(ms, initial) {
    let time = moment.duration({
      milliseconds: ms
    });

    return {
      minutes: pad(time.minutes(), 2),
      seconds: pad(time.seconds(), 2),
      milliseconds: pad(time.milliseconds(), 3),
      percentage: percentage(ms, initial),
    }
  }

  prepare() {
    this.timer = new Stopwatch(this.options.duration);
    this.data = this.getData(this.options.duration);
  }

  bind() {
    this.timer.on('time', (x) => {
      this.data = this.getData(x.ms, this.options.duration);
      this.options.onChange.call(null, this.data);
    });

    this.timer.on('done', this.options.onDone);
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  decrease(value) {
    this.timer.reset(this.timer.ms - decreaseSize);
    this.start();
  }

  add(value) {
    value = value * 1000;
    this.options.duration += value;
    this.timer.reset(this.timer.ms + value);
    this.timer.start();
  }
}
