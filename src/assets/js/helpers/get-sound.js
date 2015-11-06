const sounds = {
  gameover: '/dist/assets/sounds/game-over.wav',
  missed: '/dist/assets/sounds/error.wav',
  scored: '/dist/assets/sounds/level-up.wav',
  winner: '/dist/assets/sounds/winner.wav',
}

let soundsSrc = [];
for (let src in sounds) {
  soundsSrc.push(sounds[src]);
}

let getSound = (x) => sounds[x];

export { getSound, soundsSrc };
