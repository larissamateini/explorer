import * as states from './states.js';
import * as el from './elements.js';

export function countdown() {
  clearTimeout(states.default.countdowns);

  if(!states.default.isRunning) {
    reset();
    return;
  }
  
  let min = Number(el.minutes.textContent);
  let sec = Number(el.seconds.textContent);

  sec--

  if(sec < 0) {
    sec = 59;
    min--;
  }

  if(min < 0) {
    reset();
    return;
  }

  updateTimer(min, sec);

  states.default.countdowns = setTimeout(() => countdown(), 1000);
}

function updateTimer(a, b) {
  a = a ?? states.default.minutes;
  b = b ?? states.default.seconds;

  el.minutes.textContent = String(a).padStart(2, 0);
  el.seconds.textContent = String(b).padStart(2, 0);
}

function reset() {
  states.default.isRunning = false;
  updateTimer();
}