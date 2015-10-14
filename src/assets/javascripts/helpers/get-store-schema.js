import { clone } from 'underscore';

export default function () {
  return clone({
    fields: [],
    game: {
      timer: {
        minutes: '00',
        seconds: '00',
        milliseconds: '000',
        percentage: 100
      },
      status: {
        win: false,
        lose: false,
        playing: false
      },
      level: 0,
      wins: 0,
      lines: 5,
      size: 5,
    }
  });
}
