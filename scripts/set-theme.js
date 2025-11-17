/* Этот скрипт использует имена классов theme-menu__button, theme-dark, theme-light и theme-auto;
еще атрибуты disabled и data-theme. Поэтому их нельзя менять в HTML. */

function applyTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');

  function updateDisabledState(theme) {
    themeButtons.forEach((button) => {
      if (button.getAttribute('data-theme') === theme) {
        button.setAttribute('disabled', true);
      } else {
        button.removeAttribute('disabled');
      }
    });
  }

  if (rootElement.classList.contains('theme-light')) {
    updateDisabledState('light');
  } else if (rootElement.classList.contains('theme-dark')) {
    updateDisabledState('dark');
  } else {
    updateDisabledState('auto');
  }

  themeButtons.forEach((button) => {
    button.onclick = () => {
      applyTheme(button.getAttribute('data-theme'));
      updateDisabledState(button.getAttribute('data-theme'));
    };
  });
});
