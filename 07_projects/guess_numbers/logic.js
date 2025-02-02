let randomNumber=Math.floor(Math.random()*100+1);
const userInput=document.querySelector('#box');
const submit=document.querySelector('#btn');
const guessSlot=document.querySelector('.guesses');
const guessCount=document.querySelector('.count');
const lowOrHigh=document.querySelector('.lowOrHigh');
const resPara=document.querySelector('.resultPara');

let prevGuess=[];
let numGuess=1;
let playGame=true;

let p=document.createElement('p');

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess<1){
        alert('please enter a number more than 1');
    }
    else if(guess>100){
        alert('please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuess(guess);
            displayMesssage(`Game Over Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMesssage(`you guessed it right`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMesssage(`Number is too low`);
    }
    else if(guess>randomNumber){
        displayMesssage(`Number is too high`);
    }
}

function displayGuess(guess){
     userInput.value='';
     guessSlot.innerHTML+=`${guess},`;
     numGuess++;
     guessCount.innerHTML=`${11-numGuess}`;

}

function displayMesssage(message){
    lowOrHigh.innerHTML= `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    resPara.append(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
        newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        guessCount.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        resPara.removeChild(p);
        playGame=true;
    });
}