import fieldsStore from './fields';
import timerStore from './timer';

export default new class {

  constructor() {
    this.data = this.getSchema();
  }

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
    this.data = this.getSchema();
    this.data.status.playing = true;
  }

  setWinner = () => {
    this.data.wins++;
    this.data.level++;
    this.data.lines++;
    fieldsStore.rebuild();
  }

  setGameOver = () => {
    this.data.status.lose = true;
    this.data.status.playing = false;
    timerStore.stop();
  }

  getDimensions = () => {
    let { lines, size } = this.data;

    return {
      lines,
      size
    };
  }

  increaseLevel = () => {
    this.data.game.level++;
    this.data.game.lines++;
  }

  isWinner = () => {
    return !fieldsStore.getHead()
  }

}
