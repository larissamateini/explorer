export const modal = {
  screenResult: document.querySelector('.modalWrapper'),
  resultMessage: document.querySelector('.screenResult span'),
  btnClose: document.querySelector('.screenResult .close'),

  open() {
    modal.screenResult.classList.add('open');
  },
  close() {
    modal.screenResult.classList.remove('open');
  }
}

modal.btnClose.onclick = () => {
  modal.close();
}

window.addEventListener('keydown', handleKeydown);

function handleKeydown(event) {
  if(event.key === 'Escape') {
    modal.close();
  }
}