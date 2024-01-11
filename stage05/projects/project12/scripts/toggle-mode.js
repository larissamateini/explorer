let darkMode = true;
const buttonToggle = document.getElementById('mode');

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light');

  const modeName = darkMode ? 'Light' : 'Dark';
  event.currentTarget.querySelector('img').alt = `${modeName} mode ativado.`;
  darkMode = !darkMode;
})