const sounds = {
  gameover: '/dist/assets/sounds/level-up.wav',
  missed: '/dist/assets/sounds/error.mp3',
  scored: '/dist/assets/sounds/level-up.wav',
  winner: '/dist/assets/sounds/level-up.wav',
}

let getSound = (x) => sounds[x];

export default getSound;
