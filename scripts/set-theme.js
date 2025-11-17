function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(theme);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute('data-theme') === theme) {
        item.disabled = true;
      } else {
        item.disabled = false;
      }
    });
  }

  setDisabled('auto');

  themeButtons.forEach((button) => {
    button.onclick = () => {
      changeTheme(button.getAttribute('data-theme'));
      setDisabled(button.getAttribute('data-theme'));
    };
  });
});
