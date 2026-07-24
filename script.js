const themeToggleBtn = document.querySelector('#theme-toggle');
const bodyEl = document.querySelector('body');

function toggleDarkMode() {
  bodyEl.classList.toggle('dark-mode');

  if (bodyEl.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Light Mode';
    console.log('Dark mode enabled');
  } else {
    themeToggleBtn.textContent = '🌙 Dark Mode';
    console.log('Dark mode disabled');
  }
}

themeToggleBtn.addEventListener('click', toggleDarkMode);