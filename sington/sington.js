const plusApp1 = require("./plus");
const plusApp2 = require("./plus");

plusApp1.plus();
plusApp1.plus();
plusApp2.plus();

console.log(plusApp1.get()); // 3
console.log(plusApp2.get()); // 3
