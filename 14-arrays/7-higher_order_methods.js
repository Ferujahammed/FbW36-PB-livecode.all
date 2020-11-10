// Higher-order functions are functions that take other functions as arguments or return functions as their results.

function higherOrder(callback) {
  return callback();
}

console.log(higherOrder(() => "hello"));

// Arrays higher order methods

//map()

const numbers = [2, 4, 5, 6, 7, 8];
// take each item * 2

const res = numbers.map((item) => item * 2);

console.log(res);

//--------######--------

const names = ["Issa", "Jomar", "Yaman"];

const newNames = names.map((item) => "Hey " + item);

console.log(newNames);

//---------#########
const numbers2 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 228, 14],
  [3, 10, 26, 7],
];

oddNumbersRes = [];

const oddNumbers = numbers2.map((item) => {
  item.map((j) => {
    if (j % 2 !== 0) {
      oddNumbersRes.push(j);
    }
  });
});

console.log(oddNumbersRes);
