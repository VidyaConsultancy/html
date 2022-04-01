const divide = function (a, b) {
  return a / b;
};

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers[1]);
const person = {
  name: "John Doe",
  occupation: "Software Development",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};
console.log(person.name);
console.log(person["name"]);

const sum = (x = 0, y = 0, z = 0) => x + y + z;
console.log(sum());
console.log(sum(10));
console.log(sum(10, 20));
console.log(sum(10, 20, 30));

const concateStrings = (s1, s2) => `${s1} ${s2}`;
const concateStringsPlus = (s1, s2) => s1 + s2;

console.log(concateStrings("Hello", "world"));
console.log(concateStringsPlus("Hello", "world"));

const num1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const num2 = [1, 2, 3, 4, 5, 6, 7];
const num3 = [10, 20, 40, 100];
const num4 = [9, 3, 6, 12, 50, 58];

function addFirstAndLast(arr = []) {
  // write your code below
  return arr[0] + arr[arr.length - 1];
}

console.log(addFirstAndLast(num1));
console.log(addFirstAndLast(num2));
console.log(addFirstAndLast(num3));
console.log(addFirstAndLast(num4));
console.log(addFirstAndLast());
