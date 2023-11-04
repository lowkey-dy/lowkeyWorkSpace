// 'use strict';
// let userName = "John";
// let userNumber = 25;
// userNumber = 24;

// let storeName = 'AwesomeStore';

//  const storeDescription = {
//     budget: 10000,
//     employees: ['Mr. John,', 'Mr. Not a John', 'Mr. May be John?'],
//     products: {
//        'hemp': 9.99,
//        'anyDruds': 45.55
//     },
//     storeIsOpen: true
// }

// // Счет от 5 до 10
// function firstTask() {
//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
// }
// // firstTask();

// // Счет в обратном порядке от 20 до 10, цикл прирывается как только доходит до 13
// function secondTask() {
//     for (let j = 20; j > 10; j--) {
//         if (j == 13) {
//             break;
//         }
//         console.log(j);
//     }    
// }
// // secondTask();

// // Счет от 2 до 10
// function thirdTask() {
//     for(let k = 2; k < 11; k++ ) {
//         console.log(k);
//     }
// }
// // thirdTask();


// // Выводит нечетные числа от 3 до 17
// function fourthTask() {
//     let l = 2;
//     while (l <= 16) {
//         l++;
//         if (l % 2) console.log(l);
//     }
// }
// fourthTask();

// // Заполняет массив числами от 5 до 10
// function arrayPush() {
//     let array = [];
//     for (let f = 5; f < 11; f++) {
//         array.push(f);
//     }
//     console.log(array);
// }
// arrayPush();

// // Перебирает массив и дописывает прекрасное животное
// function prettyAnimals() {
//     let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
//     for(i = 0; i < 4; i++) {
//         console.log(animals[i] + " - прекрасное животное");
//     }
// }
// // prettyAnimals();

// // Генератор случайных строк 
// function randomString() {
//     let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
//     let randomLetter = "10";
//     let randomString = "";
//         while(randomString.length < randomLetter) {
//             randomString += alphabet[Math.floor(Math.random() * alphabet.length)];

//         }
//         console.log(randomString);
// }
// randomString();

// // Помещает значения из arr в result
// function arrayTask() {
//     const arr = [4, 7, 10, 13, 16];
//     const result = [];
//     for ( let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
//     console.log(result);
//     return result;
// }
// // arrayTask();

// function doneTask() {
//     const arr = [5, 10, 'Shoping', 20, 'Homework'];
//     for (let i = 0; i < arr.length; i++) {
//         if(typeof(arr[i]) == 'number') {
//             arr[i] = arr[i] * 2;
//         } else if (typeof(arr[i]) == 'string') {
//             arr[i] = `${arr[i]} - done`;
//         }
//     }
//     console.log(arr);
//     return arr;
// }
// // doneTask();

// // Записывает массив наоборот с помощью цикла
// function dataReverse() {
//     const data = [5, 10, 'Shoping', 20, 'Homework'];
//     const result = [];
//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length  - i];
//     }
//     console.log(result);
//     return result;
// }
// dataReverse();

// // Рисуем ёлку
// //         *
// //        ***
// //       *****
// //      *******
// //     *********
// //    *********** 

// function xMasTree() {
//     const lines = 5;
//     let result = '';
// for (let i = 0; i <= lines; i++) {
//         for (let j = 0; j < lines - i; j++) {
//             result += " ";
//         }
//         for (let j = 0; j < 2 * i + 1; j++) {
//             result += "*";
//         }
//         result += "\n";
//     }
//     console.log(result);
// }
// xMasTree();



// function findMaxNumber(a, b, c, d) {

//     if (typeof(a) !== 'number' 
//     || typeof(b) !== 'number' 
//     || typeof(c) !== 'number'
//     || typeof(d) !== 'number') {
//         return 0;    
//     } else {
//         return Math.max(a, b, c, d);
//     }
   
// }
// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');


// // Отложенное выполнение кода
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 10000);

//     }

//     function second() {
//         console.log(2);
//     }

// // first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// learnJS('JavaScript', function() {
//     console.log('Я прошёл этот урок');
// });

// function done() {
//     console.log('Я прошёд этот урок!');
// }

// learnJS('JavaSCript', done);


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };
// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);


 
// // console.log(Object.keys(options).length);
// // console.log(options["colors"]["border"]);

// // delete options.name;

// // console.log(options);
// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }
// // }
// // console.log(counter);

// // const arr = [1, 2, 3, 6, 8];
// // arr[99] = 0;
// // arr.pop();
// // arr.push(10);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let value of arr) {
// //     console.log(value);
// // }

// // console.log(arr.length);
// // console.log(arr);
// // arr.forEach(function(item, i, arr) {
// //     console.log(`${i}: ${item} внутри массива ${arr}`);
// // });

// // const str = prompt("", "");
// // const products = str.split(", ");
// // products.sort();
// // console.log(products.join('; '));


// // Замена символов в строке
// function hackerLang () {
//     let input = "javascript is awesome";
//     let output = "";

//     for (let i = 0; i < input.length; i++) {
//         if (input[i] === "a") {
//             output += "4";
//         } else if (input[i] === "e") {
//             output += "3";
//         } else if (input[i] === "i") {
//             output += "1";
//         } else if (input[i] === "o") {
//             output += "0";
//         } else {
//             output += input[i];
//         }
//     }
//     console.log(output);
// }
// hackerLang();

// // Генератор случайных строк
// // let alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
// // let randomString = "";
// // let stringLength = 6;

// // while (randomString.length < stringLength) {
// //     randomString += alphabet[Math.floor(Math.random() *   alphabet.length)];
// // }

// // console.log(randomString);

// // let a = 5,
// //     b = a;

// // b = b + 5;

// // console.log(b);
// // console.log(a);

// // const obj = {
// //     a: 5,
// //     b: 1
// // };

// // const copy = obj;

// // copy.a = 10;
// // console.log(copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
    
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj [key]; 
//     } 

//     return objCopy;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// // console.log(newNumbers); 
// // console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);

// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adacasdfsdfv';
// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

//       console.log(internet);

//       function log(a, b, c) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//       }

//      const num = [2, 5, 7];
//      log(...num);

//     //  const array = ["a", "b"];

//     //  const newArray = [...array];

//     //  const q = {
//     //     one: 1,
//     //     two: 2
//     //  };

//     //  const newObj = {...q};


//   const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         language: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
//   };
  
//   function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
//   }
//   showExperience(personalPlanPeter);

//   function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// showProgrammingLangs(personalPlanPeter);

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);


// // Переворот строки
// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');

//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')


// let num1 = Math.random();

// if (num1 > 0) {
//     console.log(num1 + ' - Число не отрицательное')
// } else {
//     console.log(num1 + ' - Число отрицательное.')
// }

// // let str = 'String is long';
// // let str1 = str.length;
// // console.log(str1);

// // Последний символ строки метод slice
// // let str2 = str.slice(-1); 
// // console.log(str2);


// // for (let i = 0; i < str.length; i++) {
// //     console.log(str[i + str.length]);
// // }


// // Чётное число или не чётное
// let num3 = 14;

// if (num3 % 2 == 0) {
//     console.log('yep');
// } else {
//     console.log('not yep');
// }

// // let str = 'some';
// // let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1,2,3]);

// const soldier = {
//     helth: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// john.sayHello();

// // const john = {
// //     health: 100
// // };

// // // Старая запись 
// // // john.__proto__ = soldier; 

// // Object.setPrototypeOf(john, soldier);

// // // console.log(john.armor);


// let number = 5; debugger
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;
// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);


// let x = 5; alert(x++);
// [ ] + false - null + true
// console.log([] + false - null + true);

// let y = 1; let x = y = 2; alert(x);


// console.log([] + 1 + 2);


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '2$'
        },
        {
            name: 'Pizza Diavola',
            price: '5$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(restorantData.openNow);

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (sDish.price) > average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение 
    // будет меняться только у копии
    copy.waitors[0] = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);







      

























