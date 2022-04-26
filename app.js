// import functions and grab DOM elements
const button1 = document.getElementById('button1');
const shell1 = document.getElementById('shell1'); 
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

let wins = 0;
let losses = 0;

const button2 = document.getElementById('button2');
const shell2 = document.getElementById('shell2');   

const button3 = document.getElementById('button3');
const shell3 = document.getElementById('shell3');

button1.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal'); 
    const randomNumber1 = Math.ceil(Math.random() * 3);
    if (randomNumber1 === 1){
        shell1.classList.add('reveal');
        wins++; 
    } else if (randomNumber1 === 2){
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;

});   
button2.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    const randomNumber1 = Math.ceil(Math.random() * 3);
    if (randomNumber1 === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomNumber1 === 2) {
        shell2.classList.add('reveal');
        wins++;
    } else {
        shell3.classList.add('reveal');
        losses++;
    }
    
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;

});  

button3.addEventListener('click', () => {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    const randomNumber1 = Math.ceil(Math.random() * 3);
    if (randomNumber1 === 1) {
        shell1.classList.add('reveal');
        losses++;
    } else if (randomNumber1 === 2) {
        shell2.classList.add('reveal');
        losses++;
    } else {
        shell3.classList.add('reveal');
        wins++;
    }

    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    totalSpan.textContent = wins + losses;

});  



// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
