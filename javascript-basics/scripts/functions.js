// function declaration
function add(a, b) {
  const total = a + b;
  console.log(`Total is ${total}`);
  return total;
}
const returnValue = add(10, 20);
const r2 = add(100, 20);
console.log(returnValue);

// function expression
const substract = function (a, b) {
  return a - b;
};
const add2 = add;
console.log(`Substract result is ${substract(20, 10)}`);

// Arrow function
const multiply = (a, b) => {
  return a * b;
};

const double = (a) => {
  return a * 2;
};

const square = (a) => a * a;

multiply(20, 10);
double(20);
square(10);

const greet = (name = "Guest") => console.log(`Hello ${name}`);
greet("John");
greet("Jane");
greet();
