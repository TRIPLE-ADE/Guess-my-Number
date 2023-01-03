'use strict';

//Initializing
let randomScore = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highscore = 0;

//selecting all DOM element 
document.querySelector('.score').textContent = score;
const guess = Number(document.querySelector('.guess').value)
const check = document.querySelector('.check');
const again = document.querySelector('.again')

const displayMessage = message => document.querySelector('.message').textContent = message


//Event listener to check the guess value
check.addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value)
  //When the guess is empty
  if(!guess){
    displayMessage('👎 No Number')
  }
  //When it is equal to randomScore 
  else if(guess === randomScore){
    displayMessage('You win')
    document.querySelector('.number').textContent = randomScore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.backgroundImage = "url('6ob.gif')";
    document.querySelector('.number').style.width = '30rem'
    

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When it is not equal to
  else if(guess !== randomScore){
    if(score > 1){
      displayMessage(guess > randomScore ? 'Number Too high' : 'Number Too low')
      score--;
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lose')
    }
  }
})

//Event listener to start the game again
again.addEventListener('click', function(){
  randomScore = Math.trunc(Math.random()* 20) + 1
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...')

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundImage = "";
})



