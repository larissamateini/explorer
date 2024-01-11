export const alertError = {
  element: document.querySelector('.screenError'),
  open() {
    alertError.element.classList.add('open');
  },
  close() {
    alertError.element.classList.remove('open');
  }
}