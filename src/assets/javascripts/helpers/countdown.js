import Stopwatch from 'timer-stopwatch';
import moment from 'moment';

import percentage from './percentage';
import pad from './pad';

const decreaseSize = 1000 * 10;

let getData = (ms, initial) => {
  let time = moment.duration({
    milliseconds: ms
  });

  return {
    minutes: pad(time.minutes(), 2),
    seconds: pad(time.seconds(), 2),
    milliseconds: pad(time.milliseconds(), 3),
    percentage: percentage(ms, initial),
  }
};

export default function (duration, onChange, onDone) {
  let initial = duration;
  let timer = new Stopwatch(duration);
  let data = getData(duration);
  let emmit = (ms) => onChange.call(null, data = getData(ms, initial));

  timer.on('time', (x) => emmit(x.ms));
  timer.start();

  return {
    stop: () => timer.stop(),
    decrease: (value) => {
      timer.reset(timer.ms - decreaseSize);
      timer.start();
    }
  }
}

