const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let nAttempts = 1;

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', handleResetEnter);

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");
  let attempt = "tentativas";

  if(inputNumber.value > 0 && inputNumber.value < 10) {
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen();

      if(nAttempts == 1) {
        attempt = "tentativa";
      }
      screen2.querySelector("h2").innerText = `Acertou em ${nAttempts} ${attempt}.`;
      
    }
  } else {
    alert('O número escolhido só deve ser entre 0 e 10.')
  }
  
  inputNumber.value = "";
  nAttempts++;
}

function handleResetClick() {
  toggleScreen();
  nAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function handleResetEnter(a) {
  if(a.key == 'Enter' && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}