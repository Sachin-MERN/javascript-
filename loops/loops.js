// Use the for loop to output even numbers from 2 to 10.

// for (let even = 2; even <=10;even++) {
//     if (even % 2 ==0) {
//         console.log(`even number is ${even}`);
//     }
    
// }

// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
i = 0;
while (i<=2) {
    console.log(i);
    ++i;
    
}

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
var i = 101
if(i === 100){
for(i  ; i<=100; i++){
 console.log(i);   
}
}else{
    console.log('-----------');
}


// program to check if a number is prime or not

// take input from the user
const number = 12
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }3

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}