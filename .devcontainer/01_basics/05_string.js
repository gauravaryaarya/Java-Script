const name="Gaurav"
const repocount= 50

//string interpolation - back ticks
//console.log(`hey! my nme is ${name} and repo count is ${repocount}`);

const gamename = new String("Gaurav's Game") //dynamic

console.log(gamename[0]);
console.log(gamename.__proto__); //object
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4)); //indexing-0
console.log(gamename.indexOf('G'));
console.log(gamename.slice(0,3)); //.substring(0,3)
//slice accept - values but substring dont

const name2="     gaurav      "
console.log(name2);
console.log(name2.trim()); //extra spaces removed from end and begin

const url = "https://gaurav.com/gaurav%arya"
console.log(url.replace('%','Hello'));
console.log(url.includes('gaurav')); // true/false
console.log(url.split('/')); //gives array




