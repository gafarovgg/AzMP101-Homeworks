// let arr = [
//   {
//     name: "test",
//     key: 1,
//   },
//   {
//     name: "task",
//     key: 2,
//   },
//   {
//     name: "tanqo",
//     key: 3,
//   },
//   {
//     name: "like",
//     key: 4,
//   },
//   {
//     name: "task",
//     key: 5,
//   },
//   {
//     name: "trust",
//     key: 6,
//   },
//   {
//     name: "test",
//     key: 7,
//   },
//   {
//     name: "last",
//     key: 8,
//   },
//   {
//     name: "tanqo",
//     key: 9,
//   },
//   {
//     name: "elephant",
//     key: 10,
//   },
//   {
//     name: "love",
//     key: 11,
//   },
//   {
//     name: "small",
//     key: 12,
//   },
//   {
//     name: "little",
//     key: 13,
//   },
// ];
//--------------------------------------1-----------------------------------------//
// const filteredArr = arr.filter((item) => item.name.startsWith("t"));

// console.log(filteredArr);
//---------------------------------------2---------------------------------------//
// let count = 0;
// arr.forEach((obj) => {
//   const name = obj.name.toLowerCase();
//   if (name.startsWith("t") && name.endsWith("t")) {
//     count++;
//   }
// });
// console.log(`t ilə başlayıb t ilə bitənlərin sayı :${count}`);
//---------------------------------------4----------------------------------------//
// arr.forEach((obj) => {
//   if (obj.name.endsWith("e")) {
//     obj.name = "SuperDev";
//   }
// });
// console.log(arr);
//---------------------------------------5.6----------------------------------------//

// let longestNameObj = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i].name.length > longestNameObj.name.length) {
//     longestNameObj = arr[i];
//   }
// }
// console.log("Ən uzun name və key olan: ", longestNameObj);
//---------------------------------------8----------------------------------------//

// let filteredArr = arr.filter((arr) => arr.name.length === 4);
// console.log(filteredArr);

//---------------------------------------10----------------------------------------//
// let totalSum = 0;
// for (let i = 0; i < arr.length; i++) {
//   totalSum += arr[i].key;
// }

// console.log("Keylərin cəmi:", totalSum);
//---------------------------------------11----------------------------------------//
// let filteredObjects = arr.filter((obj) => {
//     let tCount = obj.name.split("").filter((char) => char === "t").length;
//     return tCount >= 2;
//   });

//   console.log(filteredObjects);

//---------------------------------------12----------------------------------------//
// let filteredObject = arr.filter(
//   (obj) => obj.key > 10 && obj.name.startsWith("l")
// );
// console.log(filteredObject);

