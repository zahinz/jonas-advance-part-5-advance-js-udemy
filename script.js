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

let gameFinished = false


// ? animation of randomisation
window.onload = shuffleIcon()

function shuffleIcon() {
    let randomIcon = ['!', '@', '#', '$', '%', '^', '&', '*', '<', '?']
    for (let i = 0; i < randomIcon.length; i++) {
        setTimeout(() => {
            document.querySelector('.number').textContent = randomIcon[i]
        }, (i+1)*50);
    }
}


// ? randomise a secretNumber when first load
let secretNumber = 0
secretNumber = Math.ceil(Math.random()*20)
console.log(secretNumber)

// ? randomise the secret number and empty the input when press again button
document.querySelector('.again').addEventListener('click', againButton)

function againButton() {
    secretNumber = Math.ceil(Math.random()*20)
    console.log(secretNumber)
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222222'
    message.textContent = 'Start guessing...'
    document.querySelector('.again').style.display = 'none'
    document.querySelector('.check').style.display = 'block'
    shuffleIcon()
    score = 20
    scoreDisplay.innerHTML = 20
}

// ? add press enter button
window.addEventListener('keydown', keyPressed)

function keyPressed(evt) {
    if (evt.code == 'Enter') {
        switch (gameFinished) {
            case true:
                againButton()
                gameFinished = false
                break;
            case false:
                submitNumber()
                break;
        }
    }
}


// ? event listener when press the button check
document.querySelector('.check').addEventListener('click', submitNumber) 

function submitNumber() {
    // get the value from input check and convert into number
    const guess = Number(document.querySelector('.guess').value);
    // console.log(typeof guess)

    // 0 == false (falsy value)
    // !0 == true
    // if else statement will execute the function

    // ? no input
    if (!guess) {
        message.textContent = 'No number'
    }

    // ? if player won
    else if (guess == secretNumber) {
        message.textContent = 'correct!'
        document.querySelector('body').style.backgroundColor = '#30a930'
        document.querySelector('.again').style.display = 'block'
        document.querySelector('.check').style.display = 'none'
        document.querySelector('.number').textContent = secretNumber
        highscore += score
        highscoreDisplay.textContent = highscore
        gameFinished = true
    }

    // // ? guess low
    // else if (guess < secretNumber) {
    //     message.textContent = 'too low'
    //     score -= 1
    //     console.log(score);
    //     scoreDisplay.textContent = score
    // }

    // // ? guess high
    // else if (guess > secretNumber) {
    //     message.textContent = 'too high'
    //     score -= 1
    //     console.log(score);
    //     scoreDisplay.textContent = score
    // }

    // ? DRY guess is wrong
    else if (guess !== secretNumber) {
        message.textContent = guess > secretNumber ? 'too high' : 'too low'
        score -= 1
        console.log(score);
        scoreDisplay.textContent = score
    }
    
    // ? player lost
    if (score <= 0) {
        message.textContent = 'you lost the game'
        score = 0
        scoreDisplay.textContent = score
        document.querySelector('body').style.backgroundColor = '#A92F37'
        document.querySelector('.again').style.display = 'block'
        document.querySelector('.check').style.display = 'none'
        gameFinished = true
    }
    document.querySelector('.guess').focus()
    document.querySelector('.guess').select()
}

