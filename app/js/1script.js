/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const addsRemove = document.querySelectorAll('.promo__adv img'),
//       promoGenre = document.querySelector('.promo__genre'),
//       bgImgReplace = document.querySelector('.promo__bg'),
//       filmListReplace = document.querySelector('.promo__interactive-list');


// addsRemove.forEach(item => {
//     item.remove();
// });

// promoGenre.textContent = "Драма";

// bgImgReplace.style.backgroundImage = "url('img/bg.jpg')";

// filmListReplace.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     filmListReplace.innerHTML += `
//         <li class="promo__interactive-item"> 
//             ${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });


 

const btn = document.querySelector('button');

let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};

btn.addEventListener('click', deleteElement);

    





