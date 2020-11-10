// for of ==> The for...of statement creates a loop iterating over an array

/**
 for (variable of iterable) {
  statement
}

variable: 
On each iteration a value of a different property is assigned to variable. variable may be declared with const, let, or var.

iterable: array


 */

const users = [
  { name: "Alex", email: "alex@yahoo.om" },
  { name: "Max", email: "max@yahoo.com" },
  { name: "Tommy", email: "tom@yahoo.com" },
];

const userEmails = [];
const userNames = [];

function getEmails(userArray) {
  for (let item of userArray) {
    for (let keyInObj in item) {
      if (keyInObj === "email") {
        userEmails.push(item[keyInObj]);
      }
      if (keyInObj === "name") {
        userNames.push(item[keyInObj]);
      }
    }
  }
  return userEmails + "\n" + userNames;
}

console.log(getEmails(getEmails(users)));

//************************ */

const numbers = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 228, 14],
  [3, 10, 26, 7],
];

const evenNumbers = [];

function getEvenNumbers(arr) {
  for (let i of arr) {
    for (let j of i) {
      if (j % 2 === 0) {
        evenNumbers.push(j);
      }
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers(numbers));
