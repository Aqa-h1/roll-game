'use strict'
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const scorePlayer0 = document.querySelector('#score--0')
const scorePlayer1 = document.querySelector('#score--1')
const currentScorePlayer0 = document.querySelector('#current--0')
const currentScorePlayer1 = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice')

// Buttons
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')
const btnRoll = document.querySelector('.btn--roll')

// When game starts
let currentScore = 0
let activePlayer = 0
scorePlayer0.textContent = 0
scorePlayer1.textContent = 0
currentScorePlayer0.textContent = 0
currentScorePlayer1.textContent = 0
diceEl.classList.add('hidden')

// Generate random dice
    btnRoll.addEventListener('click', function() {
    const dice = Math.floor(Math.random() * 6) + 1

// Display dice 
  console.log(dice);
  diceEl.classList.remove('hidden')
  diceEl.src = `dice-${dice}.png`

  if(dice !== 1) {
    currentScore = currentScore + dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
  } else {
    console.log('switch player');
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore = 0
    currentScore = 0
    if (activePlayer === 0) {
        activePlayer = 1
    }else {activePlayer = 0 }
    player0.classList.toggle('player--active')
    player1.classList.toggle('player--active')
  }
})