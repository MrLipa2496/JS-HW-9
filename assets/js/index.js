// Ex1
function customCounter1(step) {
  let count = 0;
  return function () {
    count += step;
    return count;
  };
}

const myCounter = customCounter1(5);
const result1 = myCounter();
const result2 = myCounter();
const result3 = myCounter();

console.log(result1);
console.log(result2);
console.log(result3);
