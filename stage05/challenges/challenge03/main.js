const screenOne = document.querySelector(".screenOne");
const screenTwo = document.querySelector(".screenTwo");
const closedBiscuit = document.querySelector("#closedBiscuit");
const openAgain = document.querySelector("#openAgain");
const messageInside = document.querySelector('#phrase');

closedBiscuit.addEventListener('click', closedClick);
openAgain.addEventListener('click', againClick);

function closedClick() {
  toggleScreen();

  messageInside.innerHTML = newMessage();
}

function againClick() {
  toggleScreen();
}

function toggleScreen() {
  screenOne.classList.toggle('hidden');
  screenTwo.classList.toggle('hidden');
}

function newMessage() {
  let randomNumber = Math.round(Math.random() * 10);
  let message;

  switch(randomNumber) {
    case 1:
      message = 'A vida trará coisas boas se tiver paciência.';
      break;
    case 2:
      message = 'A maior de todas as torres começa no solo.';
      break;
    case 3:
      message = 'Não importa o tamanho da montanha, ela não pode tapar o sol.';
      break;
    case 4:
      message = 'Espere pelo mais sábio dos conselhos: o tempo.';
      break;
    case 5:
      message = 'O conhecimento é a única virtude e a ignorância é o único vício.';
      break;
    case 6:
      message = 'Você é do tamanho do seu sonho.';
      break;
    case 7:
      message = 'A maior barreira para o sucesso é o medo do fracasso.';
      break;
    case 8:
      message = 'Você precisa fazer aquilo que pensa que não é capaz de fazer.';
      break;
    case 9:
      message = 'A adversidade é um espelho que reflete o verdadeiro eu.';
      break;
    case 10:
      message = 'São os nossos amigos que nos ensinam as mais valiosas lições';
      break;
    default:
      message = 'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.';
  }
  return message;
}
