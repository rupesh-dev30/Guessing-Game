'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscoreResult = Number(document.querySelector('.highscore').textContent);

document.querySelector('.again').addEventListener('click', ()=> {
    document.querySelector('body').style.backgroundColor = '#222';
    var audio = new Audio("audio/try-again.mp3");
    audio.play();
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //console.log(secretNumber);
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
})

//console.log(secretNumber);
function highscore(score){
    if(score>0){
        var audio = new Audio("audio/chance-lose.mp3");
        audio.play();
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#FF0000';
        document.querySelector('.message').textContent = 'You Lost the game! Kindly Refresh the game!'
        var audio = new Audio("audio/Fail.mp3");
        audio.play();
    }
}

// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '😒No Number';
        var audio = new Audio("audio/error.mp3");
        audio.play();
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Hurray 🙌 YOU WON';
        var audio = new Audio("audio/win.mp3");
        audio.play();
        if(highscoreResult === 0){
            highscoreResult = score;
            document.querySelector('.highscore').textContent = highscoreResult;
        }
        else{
            if(highscoreResult < score){
                highscoreResult = score;
                document.querySelector('.highscore').textContent = highscoreResult;
            }
        }
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }
    else if(guess > secretNumber && guess <= 20){
        document.querySelector('.message').textContent = 'Too High 😶‍🌫️';
        score--;
        highscore(score);
    }
    else if(guess < secretNumber){
        document.querySelector('.message').textContent = 'Too low 🥵';
        score--;
        highscore(score);
    }
    else{
        document.querySelector('.message').textContent = 'Not a valid Number';
        score--;
        highscore(score);
        audio.play();
    }
});
