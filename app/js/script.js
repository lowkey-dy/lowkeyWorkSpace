/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document,addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const addsRemove = document.querySelectorAll('.promo__adv img'),
          promoGenre = document.querySelector('.promo__genre'),
          bgImgReplace = document.querySelector('.promo__bg'),
          filmListReplace = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // Вызов формы
          addInput = addForm.querySelector('.adding__input'), // Вызов инпута формы
          checkbox = addForm.querySelector('[type = "checkbox"'); // Вызов чекбоеса формы

    addForm.addEventListener('submit', (event) => { // При нажатии на кнопку Подтвердить происходит событие Event submit
        event.preventDefault(); // Отменяет перезагрузку страницы после нажатия на подтвердить
    });
    
    
    addsRemove.forEach(item => {
        item.remove();
    });
    
    promoGenre.textContent = "Драма";
    
    bgImgReplace.style.backgroundImage = "url('img/bg.jpg')";
    
    filmListReplace.innerHTML = "";
    
    movieDB.movies.sort();
    
    movieDB.movies.forEach((film, i) => {
        filmListReplace.innerHTML += `
            <li class="promo__interactive-item"> 
                ${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    
   
    
 

}); 




// const btns = document.querySelectorAll('button'),
//       overlay = document.querySelector('.overlay');  

// // let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
//     e.target.style.backgroundColor = 'red'
//     // i++;
//     //  if (i == 1) {
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

// // btn.addEventListener('click', deleteElement);
// // overlay.addEventListener('click', deleteElement);

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement, {once:true});
// });

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// });


// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentNode.parentElement);

// console.log(document.querySelector('[data-current="3"]').previousSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName =='#text') {
//         continue;
//     }
//     console.log(node);
// }

// function pow (x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//         // result = x * result;
//     }

//     return result;
// }
// function pow (x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }


// pow(2, 1);
// pow(2, 2);
// pow(2, 3);
// pow(2, 4);

// let students = {
//     js: [{
//         name: 'John',
//         progress : 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }],
//         semi: {
//             students: [{
//                 name: 'Test',
//                 progress: 100
//             }]
//         }
//     }
// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subCourse of Object.values(course)) {
//                 students += subCourse.length;

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }


// // console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//        let total = 0;

//         for (let i = 0; i < data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);

// console.log(result[0]/result[1]);









