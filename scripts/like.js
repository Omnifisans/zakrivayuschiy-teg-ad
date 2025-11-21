/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const heartIcons = Array.from(document.querySelectorAll('.like-icon'));
const likeButtons = Array.from(document.querySelectorAll('.card__like-button'));
const iconButtons = Array.from(document.querySelectorAll('.card__icon-button'));

function handleLikeState(heartElement, buttonElement) {
  const isLiked = heartElement.classList.contains('is-liked');
  
  if (isLiked) {
    heartElement.classList.remove('is-liked');
    setTimeout(() => {
      buttonElement.querySelector('.button__text').textContent = 'Like';
    }, 500);
  } else {
    heartElement.classList.add('is-liked');
    setTimeout(() => {
      buttonElement.querySelector('.button__text').textContent = 'Unlike';
    }, 500);
  }
}

iconButtons.forEach((iconBtn, i) => {
  iconBtn.addEventListener('click', () => {
    handleLikeState(heartIcons[i], likeButtons[i]);
  });
});

likeButtons.forEach((likeBtn, i) => {
  likeBtn.addEventListener('click', () => {
    handleLikeState(heartIcons[i], likeBtn);
  });
});
