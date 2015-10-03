import percentage from './percentage'
import { clone } from 'underscore'

let humanize = (time) => time < 10 ? '0' + time : time;
let getMinutes = (time) => humanize(parseInt(time / 60, 10));
let getSeconds = (time) => humanize(parseInt(time % 60, 10));
let getData = (duration, initial) => {
  return {
    minutes: getMinutes(duration),
    seconds: getSeconds(duration),
    percentage: percentage(duration, initial)
  }
}

console.log(clone)

export default function (duration, callback, onDone) {
  let data = {};
  let interval;
  let initial = duration;

  interval = setInterval(() => {

    data = getData(duration, initial);

    if (--duration < 0) {
      clearInterval(interval);
      callback.call(null, data);
      onDone();
      return;
    }

    callback.call(null, data);

  }.bind(this), 1000);

  return {
    stop: () => clearInterval(interval),
    decrease: (value) => {
      duration = (duration < 0) ? 0 : (duration - value);
      data = getData(duration, initial);
      callback.call(null, data);
    }
  }
}

