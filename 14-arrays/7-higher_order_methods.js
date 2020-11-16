// first way to solve it
const numbersToReduce = [1, 2, 3, 4, 5, 6];

let box = 0;
for (let item of numbersToReduce) {
  box += item;
}

console.log("box ==>", box);

// 2nd way to solve
let box2 = 0;

numbersToReduce.map(function (item) {
  box2 += item;
});

console.log("box2==>", box2);

//3rd way to solve
const sum = numbersToReduce.reduce((box, item) => box + item, 0);

console.log("sum==>", sum);

//new task
const names = ["Alex", "Jon", "Tommy"];
