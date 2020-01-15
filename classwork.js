// const bar = [1,2,3];
// const arrayMap = (arr, functionCallBack) => {
//     let result = [];

//     for ( const item of arr) {
//         result.push(functionCallBack(item))
//     }
//     return result;
// }

// const square = (item)  => item * item;
// console.log(arrayMap( bar,square))

// ==============
// const users = [
//   {
//     name: "John",
//     age: 40
//   },
//   {
//     name: "Tom",
//     age: 20
//   }
// ];

// const findElement = (arr, functionCallBack) => {
//   for (const item of arr) {
//     if (functionCallBack(item)) {
//       return item;
//     }
//   }
// };

// const findByName = user => user.name === "John";
// const findByAge = user => user.age === 40;
// const findByName = user => user.name === "Tom";

// console.log(findElement(users, findByName));
// console.log(findElement(users, findByName));
// console.log(findElement(users, findByAge));

// const users = [
//   {
//     name: "John",
//     age: 40
//   },
//   {
//     name: "Tom",
//     age: 20
//   }
// ];

// const findElement = (arr, functionCallBack) => {
//   for (const item of arr) {
//     if (functionCallBack(item)) {
//       return item;
//     }
//   }
// };

// const findByAge = user => user.age === 40;
// console.log(findElement(users, findByAge));

// const users = [
//   {
//     name: "John",
//     age: 40
//   },
//   {
//     name: "Tom",
//     age: 20
//   }
// ];

// const getSumOFAges = (arr, functionCallBack) => {
//     let result = 0;

//     for (const item of arr) {
//         result = result + functionCallBack(item);
//     }
// }


// const findAge = user => user.age;
// console.log(getSumOFAges(users, findAge));





 =========== Замыкание ====================
const multOfArray = (number) => (array) => {
  let sum = 0;
  for (const element of array) {
    sum += element * number
  }

  return sum;
};
console.log( multOfArray (10)([2,10,15]))


const getFullName = (firstName) => (lastName) => `${firstName} ${lastName}`;

console.log (getFullName ('Albert')('Nikonov'))