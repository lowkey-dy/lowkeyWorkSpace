'use strict';

// touchstart
// touchmove

window.addEventListener('DOM ContentLoaded', () =>  {

    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('e.targetTouches[0].pageX');

    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');

    });

});

// touches