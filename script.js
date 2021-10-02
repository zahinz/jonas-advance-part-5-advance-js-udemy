'use strict';

// ? .querySelector() and .textContent
// console.log(document.querySelector('.message').textContent)

// ? .textContent == .innerHTML
// document.querySelector('.message').textContent = 'hello'

// document.querySelector('.number').textContent = 13
// document.querySelector(.score).textContent = 20
// document.querySelector(.guess).value

// ? variable declaration 
let message = document.querySelector('.message')

let score = 20
let scoreDisplay = document.querySelector('.score')

let highscore = 0
let highscoreDisplay = document.querySelector('.highscore')


// ? randomise a secretNumber
let secretNumber = 0
secretNumber = Math.ceil(Math.random()*20)
console.log(secretNumber)
document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.ceil(Math.random()*20)
    console.log(secretNumber)
    // document.querySelector('.number').textContent = secretNumber
})



// ? event listener when press the button check
document.querySelector('.check').addEventListener('click', function() {
    // get the value from input check and convert into number
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess)

    // 0 == false (falsy value)
    // !0 == true
    // if else statement will execute the function
    if (!guess) {
        message.textContent = 'No number'
    }
    else if (guess == secretNumber) {
        message.textContent = 'correct!'
        highscore += score
        highscoreDisplay.textContent = highscore
    }
    else if (guess < secretNumber) {
        message.textContent = 'too low'
        score -= 1
        console.log(score);
        scoreDisplay.textContent = score
    }
    else if (guess > secretNumber) {
        message.textContent = 'too high'
        score -= 1
        console.log(score);
        scoreDisplay.textContent = score
    }

})

