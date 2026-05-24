/*
(Дополнительное задание 1)
Создал burger-menu через JS.

querySelector ищет элементы на странице.

addEventListener отслеживает клик.

classList.toggle: либо добавляет класс, либо удаляет его.
*/

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');

burger.addEventListener('click', () => {

    nav.classList.toggle('header__nav--open');

});