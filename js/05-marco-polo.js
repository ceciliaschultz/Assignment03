// Assignment 03
// Maria Cecilia Schultz
// Marco! Polo!

/*
Create an application which iterates numbers from 1 to 100. 
For multiples of 3, print "Marco!" instead of the number and 
for multiples of 5, print "Polo!" instead of the number.
For numbers which are multiples of both 3 and 5 print "Marco! Polo!".

*/

// loop from 1 to 100 
for (let i=1; i<=100; i++) {
    let multipleOfThree =(i % 3 ==0);
    let multipleOfFive =(i % 5 ==0);
    let multipleOfThreeAndFive =multipleOfThree && multipleOfFive;

    // It is not very clear from the problem what to do if the number 
    // is not multiple of 3, not multiple of 5, and not multiple of 3 and 15
    // We are assuming in this case, to print the number
    let resultMessage;

    switch (true) {
        case (multipleOfThreeAndFive): 
            resultMessage="Marco! Polo!";
            break;
        case (multipleOfThree):
            resultMessage="Marco!";
            break;
        case (multipleOfFive):
            resultMessage="Polo!";
            break;
        default: 
            resultMessage=i.toString();
            break;
    }
    console.log(resultMessage);
    
}
