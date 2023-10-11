// Assignment 03
// Maria Cecilia Schultz
// "Coin Flip" Game Redux

let coinFlip;

// get # of times to try from user input
let numberTimes = parseInt(prompt('Enter the # of times to flip the coin: '));

// loop and write the coin flip result on every iteration of the loop
for (let i=0; i<numberTimes; i++) {
    coinFlip = doCoinFlip();
    console.log( (coinFlip ==0 ? "Heads" : "Tails"));
}

function doCoinFlip() {

    // simulate a coin flip with a random number between 1 and 100 
    let coinFlip = Math.floor(Math.random() * 100) + 1;

    // Use a conditional to check the result of the coin flip. 
    // For a rndom # between 1 and 100, there's 50% chance for either heads or tails 
    let flipResult = (coinFlip>50 ? 0 : 1);     

    return flipResult;
}