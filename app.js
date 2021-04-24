var a= alert("never trust nobody");
// var a=98469326 ;
// var b=231894;
// var c=a+b;
// console.log(c) 
// var a= 10
// var b=a++ + ++a - a + a++ - ++a +a
// console.log(b)
// var a = +prompt("enter your name","your name is")
// var b= a+76
// console.log(b)
// var age= +prompt("ENTER YOUR AGE    ")
// if(age==22){alert("YOUR AGE IS egual")}
// else if(age<22){alert("you are age less")}  
// else{alert("you are no more with less age")} 
// alert("welcome " + student[0,1,2])
// var names=[];
// names[0] ="waqar"
// names[1]="affan"
// console.log(names)
var friends=["kashif","affan","waqar","nizam","huzfa","muzammil"];
friends.pop()
friends.push("muneenb")
friends.shift()
friends.unshift("kashif","ibtehaj","muzammil")
friends.splice(8,0,"saqib") 
console.log(friends)
var jaanis=friends.slice(0,1)
console.log(jaanis)
var x;
for(x=0;x<friends.length ;x++){for(i=0;i<friends.length;i++){console.log(friends[x]+""+x[i])}}
// // program for a simple calculator

// // take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
//  document.write (`${number1} ${operator} ${number2} = ${result}`);
