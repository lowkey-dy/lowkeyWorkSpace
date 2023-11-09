'use strict';

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
    
    document.querySelector('.show-pole_1').textContent = userName.surname;
    document.querySelector('.show-pole_2').textContent = userName.name;
    // document.querySelector('.show-pole_3').textContent = userName.thirdname;
    
    document.querySelector('.show-pole_4').textContent = userName.phone;
    document.querySelector('.show-pole_5').textContent = userName.id;
    
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
  
    document.querySelector('.surname__input').value = '';

};


    




    

















