export default new class {
  constructor() {
    this.data = this.getSchema();
  }

  data = {}

  isGameOver = () => this.data.status.lose

  getSchema = () => {
    return {
      level: 0,
      wins: 0,
      lines: 5,
      size: 5,
      status: {
        win: false,
        lose: false,
        playing: false,
      },
    }
  }

  start = () => {
    this.data.status.playing = true;
  }

  setWinner = () => {
    // why?
    this.data.wins++;
    this.data.level++;
    this.data.lines++;

    // should call fields.rebuild();
    // should call timer.increaseTime();
    // then emmitChange
  }

  setGameOver = () => {
    this.data.status.lose = true;
    this.data.status.playing = false;
    // should call timer.stopCountDown();
  }

}
