let humanize = (time) => time < 10 ? '0' + time : time;
let getSeconds = (time) => humanize(parseInt(time / 60, 10));
let getMinutes = (time) => humanize(parseInt(time % 60, 10));

export default function (duration, callback, onDone) {
  let data = { minutes: 0, seconds: 0 };
  let interval = setInterval(() => {
    data.minutes = getSeconds(duration);
    data.seconds = getMinutes(duration);

    if (--duration < 0) {
      clearInterval(interval);
      onDone();
      return;
    }

    callback.call(null, data);

  }.bind(this), 1000);
}

