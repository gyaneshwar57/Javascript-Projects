let randomNumber=parseInt(Math.random()*100+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrhi=document.querySelector('.lowOrhi')
const startOver=document.querySelector('.resultParas')


const p=document.createElement('p')
let prevGuess=[];
let numGuess=1;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()                          //preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess<1){
        alert('Please enter a  number more than one')
    }
    else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess===randomNumber){
        displayGuess(`You guessed it right`)
        endGame()
    }
    else if(guess< randomNumber){
        displayMessage(`Number is Tooo low`)
    }
    else if(guess>randomNumber){
        displayMessage(`Number is Tooo high`)
    }


}
function displayGuess(guess){

    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `// use space
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message){

    lowOrhi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id ="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}
function newGame(){

  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[];
    newGuess=1;
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true
  });
}
 









