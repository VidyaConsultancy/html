// forEach, map, filter, reduce, sort
const numbers = [3, 11, 5, 1, 6, 9, 2, 8, 10];

const squareFn = function (value, index, array) {
  squares.push(value ** 2);
  return true;
};
const squares = [];
const result = numbers.forEach(squareFn);
console.log(numbers);
console.log(squares);
console.log(result);

const doubles = numbers.map((value, index, array) => value ** 3);
console.log(numbers);
console.log(doubles);

const filtered = numbers.filter((value, index, array) => value >= 5);
console.log(numbers);
console.log(filtered);

const reduced = numbers.reduce(
  (prevValue, currentValue, currentIndex, array) => {
    return prevValue + currentValue;
  },
  0
);
console.log(numbers);
console.log(reduced);

const sortAsc = (a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  return -1;
};

const sortDesc = (a, b) => {
  if (a > b) return -1;
  if (a === b) return 0;
  return 1;
};

const sorted = [].concat(numbers).sort(sortDesc);
console.log(numbers);
console.log(sorted);

const sortedSquares = numbers
  .map((n) => n ** 2)
  .sort(sortAsc)
  .filter((n) => n % 2 === 0)
  .reduce((p, c) => p + c, 0);
console.log(numbers);
console.log(sortedSquares);
