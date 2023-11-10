'use strict';
document.addEventListener('DOMContentLoaded', () => { // Запусткает выволнение JavaScript только после загружки всей страницы.

document.querySelector('.search__btn').onclick = function() {
  
  
    const enteredName = document.querySelector('.surname__input').value.trim(),
          nameUpperCase = enteredName.charAt(0).toUpperCase() + enteredName.slice(1); //Если ввели с маленькой буквы, меняем на заглавную

    if (enteredName == '') return false;
    console.log(nameUpperCase);

    // const check = document.querySelectorAll('.show-pole');
    // const addData = (arr) => {
    //     arr.forEach(item => {
    //         item[0] = phoneDataBase.surname
    //     });
    //     addData(check);
    // }
   
    let userName = phoneDataBase.find(el => el.name == nameUpperCase || el.surname == nameUpperCase || el.surname == nameUpperCase);
    
    document.querySelector('.show-pole_surname').textContent = userName.surname;
    document.querySelector('.show-pole_name').textContent = userName.name;
    document.querySelector('.show-pole_phone').textContent = userName.phone;
    document.querySelector('.show-pole_light').textContent = userName.light;
    document.querySelector('.show-pole_id').textContent = userName.id;
    document.querySelector('.show-pole_photo').cssText = `background-image: url('../img/im.jpg')`;
    
    
};

// Чекает и удаляет данные в полях
document.querySelector('.clear__btn').onclick = function() {
    const textRemove = document.querySelectorAll('.show-pole'),
          deleteText = (arr) => { 
        arr.forEach(item => {
           item.textContent = '';
        });
    };
    deleteText(textRemove);
  
    document.querySelector('.surname__input').value = ''; //Очищает инпут

};

}); 


    




    

















