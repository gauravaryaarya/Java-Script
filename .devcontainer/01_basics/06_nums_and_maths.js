//*************NUMBERSSSSSSSSS*********************
const score = 400
//console.log(score);

const balance= new Number(100)
//console.log(balance);

//console.log(balance.toString()); 
//console.log(balance.toString().length);
//console.log(balance.toFixed(2)); //precision value upto

const othernumber= 23.8966
//console.log(othernumber.toPrecision(3))  

const bigamount= 10000000
//console.log(bigamount.toLocaleString('en-IN')); //commas

//****************MATHSSSSSSSSSSS**********************

console.log(Math); //object
console.log(Math.abs(-200)); //only positive
console.log(Math.round(4.6)); //normal round off
console.log(Math.ceil(4.2)); // upper value
console.log(Math.floor(4.6)); //lower value

console.log(Math.random()); //0 to 1
console.log(Math.random()*10 + 1);

const min=10
const max=20

let x= Math.floor((Math.random() * (max-min+1)) + min)
console.log(x);