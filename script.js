'use strict';

let v = (document.querySelector('.score').textContent = 20);
let rnum = Math.floor(Math.random() * (20 - 1 + 1) + 1);

let score = Number(prompt('How much score do u need to start the Game??'));
let maxi = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = 0;

const numberCheck = () => {
    let val = document.querySelector('.guess').value;

    console.log(maxi);
    if (val == '') {
        alert('Please enter number');
    } else if (Number(val) === rnum) {
        document.body.style.background = 'green';
        document.querySelector('.number').textContent = rnum;
        document.querySelector('.message').textContent = '🔥Correct Number🔥';
        document.querySelector('.guess').value = '';
        document.querySelector('.number').style.width = '30rem';
        score++;
        maxi = Math.max(score, maxi);
        document.querySelector('.highscore').textContent = maxi;
        document.querySelector('.score').textContent = score;
    } else {
        if (score > 1) {
            document.querySelector('.guess').value = '';
            document.querySelector('.message').textContent =
                Number(val) < rnum ? 'Number is too Low!!' : 'Number is too High!!';
            document.body.style.background = '#272838';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.body.style.background = 'red';
            document.querySelector('.message').textContent = 'You lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
};
//check button logic
document.querySelector('.check').addEventListener('click', numberCheck);

const refreshPage = () => {
    rnum = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    score = Number(prompt('How much score do u need to start the Game??'));
    document.querySelector('.score').textContent = score;
    document.body.style.background = 'black';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
};
document.querySelector('.again').addEventListener('click', refreshPage);