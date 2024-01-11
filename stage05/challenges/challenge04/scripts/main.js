import * as states from './FocusTimerV2/states.js';
import * as sounds from './FocusTimerV2/sounds.js';
import * as el from './FocusTimerV2/elements.js';
import { countdown } from './FocusTimerV2/timerFunctions.js';
import { updateMusicIsOnOrNot, stopMusic, switchMusic, playMusic } from './FocusTimerV2/soundsFunctions.js';

el.playButton.addEventListener('click', () => {
  states.default.isRunning = true;
  countdown();
})

el.stopButton.addEventListener('click', () => {
  states.default.isRunning = false;
  countdown();
})

el.plus5MinButton.addEventListener('click', () => {
  el.minutes.textContent = Number(el.minutes.textContent) + 5;
})

el.minus5MinButton.addEventListener('click', () => {
  el.minutes.textContent = Number(el.minutes.textContent) - 5;
})

el.florestCard.addEventListener('click', () => {
  updateMusicIsOnOrNot();

  stopMusic(sounds.florestAudio);

  switchMusic(sounds.florestAudio);

  playMusic(sounds.florestAudio);
})

el.rainCard.addEventListener('click', () => {
  updateMusicIsOnOrNot();

  stopMusic(sounds.rainAudio);

  switchMusic(sounds.rainAudio);

  playMusic(sounds.rainAudio);
})

el.coffeeShopCard.addEventListener('click', () => {
  updateMusicIsOnOrNot();

  stopMusic(sounds.coffeeShopAudio);

  switchMusic(sounds.coffeeShopAudio);

  playMusic(sounds.coffeeShopAudio);
})

el.fireplaceCard.addEventListener('click', () => {
  
  updateMusicIsOnOrNot();

  stopMusic(sounds.fireplaceAudio);

  switchMusic(sounds.fireplaceAudio);

  playMusic(sounds.fireplaceAudio);
  
})