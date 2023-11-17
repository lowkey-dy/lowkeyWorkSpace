'use strict';

document.addEventListener('DOMContentLoaded', () => { // Запусткает выволнение JavaScript только после загружки всей страницы.

    const movieDB = { // Массив
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const addsRemove = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          poster = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // Вызов формы
          addInput = addForm.querySelector('.adding__input'), // Вызов инпута формы
          checkbox = addForm.querySelector('[type = "checkbox"'); // Вызов чекбоеса формы

    addForm.addEventListener('submit', (event) => { // При нажатии на кнопку 'Подтвердить' происходит событие отправка (Event submit)
        event.preventDefault(); // Отменяет перезагрузку страницы после нажатия на подтвердить

        let newFilm = addInput.value; // В переменную помещает данные из Input
        const favorite = checkbox.checked; // Проверяет нажат ли чекбокс

        if (newFilm) {   // Если количество введенных в инпут знаков больше 21, знаки обрезает и ставит (...)
            if (newFilm.length > 21 ) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) { // Если чекбокс стоит флажок, выводит в консоль запись
                console.log('Добавляем любимый фильм')
            }

            movieDB.movies.push(newFilm); //Добавляет в массив новый фильм
            sortArr(movieDB.movies); //Сортирует массив по алфавиту

            createMovieList(movieDB.movies, movieList); //Вызывает функцию
        }
        event.target.reset(); 

    });

    const deleteAdv = (arr) => { // Чекает и удаляет рекламу
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChanges = () => { //Изменяет жанр фильма
        genre.textContent = "Драма";
    
        poster.style.backgroundImage = "url('img/bg.jpg')"; //Меняем постер
    };
   
    const sortArr = (arr) => { //Функция сортировки массива
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> 
                    ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);

            });
        });
    }
    
    deleteAdv(addsRemove);
    makeChanges();
    // sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
    
}); 