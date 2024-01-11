import * as states from './states.js';

export function updateMusicIsOnOrNot() {
  states.default.musicIsOn = !states.default.musicIsOn;
}

export function stopMusic(currentAudio) {
  if(states.default. whichMusicIsOn == currentAudio) {
    states.default.whichMusicIsOn.pause();
    states.default.whichMusicIsOn = null;
  }
}

export function switchMusic(newAudio) {
  if(states.default.whichMusicIsOn != null) {
    states.default.whichMusicIsOn.pause();

    states.default.whichMusicIsOn = newAudio;
    states.default.musicIsOn = true;
    states.default.whichMusicIsOn.play();
  }
}

export function playMusic(playAudio) {
  if(states.default.musicIsOn) {
    states.default.whichMusicIsOn = playAudio;
    states.default.whichMusicIsOn.play();
  }
}