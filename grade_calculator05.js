var number0 = prompt("Please enter your marks of maths");
var number1 = prompt("Please enter your marks of Physics");
var number2 = prompt("Please enter your marks of Chemistry");
console.log("Your Maths marks : ".concat(number0));
console.log("Your Physics marks : ".concat(number1));
console.log("Your Chemistry marks : ".concat(number2));
var aaa = +number0;
var bbb = +number1;
var ccc = +number2;
var sum = aaa + bbb + ccc;
console.log("Addition of three subject: ".concat(sum));
var avg = sum / 3;
console.log("avg of three subject: ".concat(avg));
if (avg < 70) {
    console.log("Your Grade is : C");
}
if (avg > 70 && avg < 90) {
    console.log("Your Grade is : B");
}
if (avg > 90) {
    console.log("Your Grade is : A");
}
