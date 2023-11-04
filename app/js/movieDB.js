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