//-------------------------------------------------------------------------------//
// Loops task - 1

// function ededler(eded) {
//   const birinci_reqem = Math.floor(eded / 100);
//   const ikinci_reqem = Math.floor((eded % 100) / 10);
//   const ucuncu_reqem = eded % 10;

//   const cem = birinci_reqem + ikinci_reqem + ucuncu_reqem;
//   const hasil = birinci_reqem * ikinci_reqem * ucuncu_reqem;
//   const edediorta = (birinci_reqem + ucuncu_reqem) / 2;

//   return { cem, hasil, edediorta };
// }

// const verilmis_eded = parseInt(prompt("3 rəqəmli ədədi daxil edin:"));
// const { cem, hasil, edediorta } = ededler(verilmis_eded);

// console.log(`Rəqəmlərin cəmi: ${cem}`);
// console.log(`Rəqəmlərin hasili: ${hasil}`);
// console.log(`Ədədi ortası: ${edediorta}`);

// Loops task - 2
// let num = 999;

// for (let i = 0; num >= i; i++) {
//   if (num % i === 0) {
//     console.log(i);
//   }
// }

// Loops task - 3

// Loops task - 4

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// Loops task - 5

// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i}    ${i * i}    ${i * i * i}`);
// }

// Loops task - 6

// Loops task - 7
// let tek_cem = 0;
// let cut_cem = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     tek_cem += i;
//   } else {
//     cut_cem += i;
//   }
// }

// console.log(`Tək ədədlərin cəmi: ${tek_cem}`);
// console.log(`Cüt ədədlərin cəmi: ${cut_cem}`);

//------------------------------------------------------------------------------//
// Function task - 1

// function printFullName(firstName, lastName) {
//     if (firstName && lastName) {
//       console.log(`I am ${firstName} ${lastName}`);
//     }
//   }

//   printFullName("lorem", "ipsum");

// Function task - 2

// function square(number) {
//   return number * number;
// }

// console.log(square(31)); // 961

// Function task - 3

// function sum(a, b) {
//   return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtruct(a, b) {
//   return a - b;
// }

// function divide(a, b) {
//   return a / b;
// }

// console.log(sum(18, 3));
// console.log(multiply(18, 3));
// console.log(subtruct(18, 3));
// console.log(divide(18, 3));

// Function task - 4

// function calc(a, b, operator) {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if (operator === "/") {
//     return a / b;
//   }
// }
// z
// console.log(calc(30, 10, "+"));
// console.log(calc(30, 10, "-"));
// console.log(calc(30, 10, "*"));
// console.log(calc(30, 10, "/"));

// Function task - 5

// function getSum(array) {
//   const firstone = array[0];
//   const lastone = array[array.length - 1];
//   return firstone + lastone;
// }

// console.log(getSum([31, 2, 69]));
// console.log(getSum([20, 50, 52, 11, 120]));
// console.log(getSum([15, -500, 0, 220]));

// Function task - 6

// function getSum(array) {
//   let totalSum = 0;
//   for (const element of array) {
//     totalSum += element;
//   }
//   return totalSum;
// }

// console.log(getSum([31, 2, 69]));
// console.log(getSum([20, 50, 52, 11, 120]));
// console.log(getSum([15, -500, 0, 220]));

// Function task -7

// Function task -8

// function filterEmployees(employees) {
//     return employees.filter(employee => employee.salary > 60000);
// }

// const employees = [
//     { name: "Jamil", salary: 50000, department: "IT" },
//     { name: "Jale", salary: 60000, department: "HR" },
//     { name: "Bayram", salary: 55000, department: "IT" },
//     { name: "Sahil", salary: 75000, department: "HR" },
//     { name: "Maryam", salary: 65000, department: "IT" },
//     { name: "Elnara", salary: 80000, department: "HR" },
//     { name: "Davud", salary: 70000, department: "IT" }
// ];

// const highSalaryEmployees = filterEmployees(employees);
// console.log(highSalaryEmployees);

// Function task - 9

// function findElement(arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       return `${number} array elementlərindən biridir`;
//     }
//   }
//   return `${number} array elementləri arasında yoxdur`;
// }

// console.log(findElement([33, 28, 45, 17], 45)); // 45 array elementlərindən biridir
// console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
// console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir

// Function task - 10

// Function task - 11

// function concatArray(arr1, arr2) {
//   const combinedArray = [...arr1, ...arr2];
//   return combinedArray;
// }

// const result = concatArray([1, 2, 3, 4, 5], [6, 7, 8, 9]);
// console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Function task - 12
// Function task - 13

// Function task - 14

// function range(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// const başlanğıc = 1;
// const son = 100;
// const netice = range(başlanğıc, son);
// console.log("NƏTİCƏ:", netice);
