// Assignment 03
// Maria Cecilia Schultz
// "Coin Flip Streak" Game 

let coinFlip;


// loop and write the coin flip result on every iteration of the loop
// stop when we get Tails
do {
    coinFlip = doCoinFlip();
    console.log((coinFlip ==0 ? "Heads" : "Tails"));
    let stop = (coinFlip==1); // stop when we get Tails
  }
  while (!stop);


  
function doCoinFlip() {

    // simulate a coin flip with a random number between 1 and 100 
    let coinFlip = Math.floor(Math.random() * 100) + 1;

    // Use a conditional to check the result of the coin flip. 
    // For a rndom # between 1 and 100, there's 50% chance for either heads or tails 
    let flipResult = (coinFlip>50 ? 0 : 1);     

    return flipResult;
}