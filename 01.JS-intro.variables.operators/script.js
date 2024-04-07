// task - 1

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// task - 2
// let number = parseInt(prompt("writing number"));
// if (number % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

//task - 3

// let num = parseInt(prompt("Please write number"));

// for (let i = 0; num >= i; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

//task - 4
// let katet1 = parseInt(prompt("writing katet1"));
// let katet2 = parseInt(prompt("writing katet2"));
// let katet3 = parseInt(prompt("writing katet3"));
// if (katet1 * katet1 + katet2 * katet2 === katet3 * katet3) {
//   console.log("Duzbucaqli ucbucaqdir");
// } else {
//   console.log("Duzbucaqli ucbucaq deyil");
// }

//task - 5
// let n = parseInt(prompt("Number Here"));

// while (n > 0) {
//   let res = n % 10;
//   console.log(res);
//   n = parseInt(n / 10);
// }

// task - 6

// let teref1 = parseInt(prompt("birinci terefi daxil edin"));
// let teref2 = parseInt(prompt("ikinci terefi daxil edin"));
// let teref3 = parseInt(prompt("ucuncu terefi daxil edin"));
// if (teref1 === teref2 && teref1 === teref3 && teref2 === teref3) {
//   console.log("Beraberterefli ucbucaqdir");
// } else {
//   console.log("Beraberterefli deyil");
// }

// task - 7

// let teref1 = parseInt(prompt("birinci terefi daxil edin"));
// let teref2 = parseInt(prompt("ikinci terefi daxil edin"));
// let teref3 = parseInt(prompt("ucuncu terefi daxil edin"));

// if (teref1 === teref2 && teref2 != teref3 && teref1 != teref3) {
//   console.log("beraberyanli ucbucaqdir");
// } else {
//   console.log("beraberyanli deyil");
// }

// task - 8

// task - 9

// let months = parseInt(prompt("Write the months number"));
// switch (months) {
//   case 1:
//     console.log("January has 31 days");
//     break;
//   case 2:
//     console.log("February has 28 days");
//     break;
//   case 3:
//     console.log("March has 31 days");
//     break;
//   case 4:
//     console.log("April has 30 days");
//     break;
//   case 5:
//     console.log("May has 31 days");
//     break;
//   case 6:
//     console.log("June has 30 days");
//     break;
//   case 7:
//     console.log("July has 31 days");
//     break;
//   case 8:
//     console.log("August has 31 days");
//     break;
//   case 9:
//     console.log("September has 30 days");
//     break;
//   case 10:
//     console.log("October has 31 days");
//     break;
//   case 11:
//     console.log("November has 30 days");
//     break;
//   case 12:
//     console.log("December has 31 days");
//     break;
// }

//task - 10

//task - 11

// let point = parseInt(prompt("Write point"));
// if (point >= 90) {
//   console.log("A");
// } else if (point < 90 && point >= 80) {
//   console.log("B");
// } else if (point < 80 && point >= 70) {
//   console.log("C");
// } else if (point < 70 && point >= 60) {
//   console.log("D");
// } else if (point < 60 && point >= 1) {
//   console.log("F");
// }

// task - 12
// let number1 = parseFloat(prompt("Enter the first number:"));
// let number2 = parseFloat(prompt("Enter the second number:"));
// let operation = prompt("Enter the math operation(+, -, *, /):");

// let result;

// switch (operation) {
//   case "+":
//     result = number1 + number2;
//     break;

//   case "-":
//     result = number1 - number2;
//     break;

//   case "*":
//     result = number1 * number2;
//     break;

//   case "/":
//     result = number1 / number2;
//     break;

//   default:
//     console.log("Please enter the correct operation");
//     break;
// }

// console.log(`Result: ${result}`);
