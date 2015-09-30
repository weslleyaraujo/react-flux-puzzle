export default function (duration, fn) {
  let minutes
  let seconds;

  let interval = setInterval(function () {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if (--duration < 0) {
      clearInterval(interval);
      fn();
    }

  }, 1000);
}
