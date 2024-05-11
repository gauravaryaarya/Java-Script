let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

let mybirthdate= new Date(2003,11,27)
console.log(mybirthdate.toDateString());

//adding time
let birthdate = new Date(2003,11,27,5,20)
console.log(birthdate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);

console.log(birthdate.getTime());
console.log(Math.floor(birthdate.getTime()/1000));