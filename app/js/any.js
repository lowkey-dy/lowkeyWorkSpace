// console.log( NaN || 2 || undefined ); /* Выведет 2 */


// console.log( NaN && 2 && undefined ); /* NaN */


// console.log( 1 && 2 && 3 ); /* Выведет 3*/


// console.log( !1 && 2 || !3 ); /* Выведет false*/


// console.log( 25 || null && !3 ); /* Выведет 25*/


// console.log( NaN || null || !3 || undefined || 5); /* Выведет 5*/


// console.log( NaN || null && !3 && undefined || 5); /* Выведет 5*/


// console.log( 5 === 5 && 3 > 1 || 5); /* True 5*/

// const hamburger = 0;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

/* let num = 100;

for ( let i = 1; i < 0; i++) {
    console.log(num);
    num++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
} */



// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++) {
//         result+="*";
//     }
//     result += '\n';
// }

// console.log(result);

// let result = '';
// const length = 10;

// for ( let i = 1; i < length; i++) {
    
//     for ()

// }

for ( let i = 5; i < 11; i++) {
     
    if (i === 11) {
        break;
    }
    console.log(i);
}

// for ( let j = 20; j >= 10; j--) {
    
//     if (j === 13) {
//         break;
//         console.log(j);
//     }
// }
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) break;
        console.log(i)
    }
}

for (let d = 2; d <= 10; d++){

    if (d % 2 === 0){
        console.log(d);
    }
    
}

let num = 2;

while (num <= 15){
    num++;
    if(num%2) console.log(num); 
  
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arrayOfNumbers = [];
 
for (let h = 5; h < 11; h++) {
    arrayOfNumbers.push(h);
    console.log(arrayOfNumbers);

}

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// result.push(arr);
// console.log(arr);

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    } 
    result += "\n";
}

console.log(result)



const logg = "Hello World";

console.log(logg.slice(-5, -1));
console.log(logg.substring(8, 11));

// const seatNumber = +prompt('Введите место?');

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
// }

// getCoupeNumber(33);

function getTimeFromMinutes(getTime) {
    if (typeof(getTime) !== 'number' || getTime < 0 || !Number.isInteger(getTime)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(getTime / 60);
    const minutes = getTime % 60;

    let hourStr = '';

    switch (hours) {
        case 0:
            hourStr = 'часов';
            break;
        case 1:
            hourStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hourStr = 'часа';
            break;
        default:
            hourStr = 'часов';
    }

    return `Это ${hours} ${hourStr} и ${minutes} минут`;
}

getTimeFromMinutes(180);







