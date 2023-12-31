// Assignment 03
// Maria Cecilia Schultz
// Odd or Even

/*
Write a loop that will iterate from 0 to 15. 
For each iteration it will check if the current number is odd or even, and display a message in the console window.
Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/

// loop from 0 to 15 and write if iteration is odd or even
for (let i=0; i<=15; i++) {
    let parity =(i % 2 ==0 ? "even" : "odd");
    console.log(`${i} is ${parity}`);
}
