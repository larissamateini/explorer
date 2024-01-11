import { modal } from './modal.js';
import { alertError } from './alert-error.js'
import { IMC, notANumber } from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#inputWeight');
const inputHeight = document.querySelector('#inputHeight');

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();
form.onsubmit = (event) => {
  event.preventDefault();
  
  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if(weightOrHeightIsNotANumber) {
    alertError.open();
    return;
  }

  alertError.close();

  const result = IMC(weight, height);
  displayResultMessage(result);
}

function displayResultMessage(result) {
  modal.resultMessage.innerText = `Seu IMC é de ${result}`;
  modal.open();
}