'use strict';

function sayYourName() {
    let userName = prompt("Say your name, honey?");
    while (userName == "" || userName == null) {
        userName = prompt("Say your name, honey?"); 
    }
    alert("Привет, " + userName);
        
}
sayYourName();

function hangingTree() {
    let words = ["drill", "bestes", "wichen", 
    "shure", "nothing", "coding"];
    let word = words[Math.floor(Math.random() * words.length)];
    let answerArray = [];

    for(let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    let remainingLatters = word.length;
    let numberOfTurns = 0;

    while (remainingLatters > 0 && numberOfTurns < 15) {
        alert(answerArray.join(" "));
        numberOfTurns++;
        let guess = prompt("Guess a letter or push cancel for close the game.").toLowerCase();

        if (guess === null) {
             break;
        } else if (guess.length != 1) {
            alert("Please, enter only one letter.");
        } else {
            for (let j = 0; j < word.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    remainingLatters--;
                }
            }
        }
    }
    alert(answerArray.join(""));
    if (numberOfTurns > 15) {
        alert("Perfect! It was mystery word " + word);
    } else {
        alert("You loose! It was mystery word " + word);
    }
    
}
hangingTree();