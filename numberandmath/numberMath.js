// const mynum = 123458;
// console.log(mynum);

const balance = new Number(' 145236  ');

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // this method return the 00 ending of your value (145236.00) 
const salary = new Number('100000')
console.log(salary.toLocaleString('en-IN')); // this return the value in readable format 1,00,000 like this

console.log(balance.toPrecision(5)); // 1.4524e+5
// console.log(balance.split('0'));

// let i = 0;
// while (i++ < 5) 
// console.log(i);

for (let i = 0; i < 5; ++i) 
console.log( i );

