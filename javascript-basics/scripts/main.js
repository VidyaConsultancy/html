function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const p1 = new Person("Jane", 28);
const p2 = new Person("Smith", 30);
console.log(p1);
console.log(p2);
console.log(p1.greet())
console.log(p2.greet())

function Employee(name, age, dept) {
  Person.call(this, name, age);
  this.dept = dept
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const e1 = new Employee('Smith', 20, 'HR');
console.log(e1)
console.log(e1.greet())


function funFun() {
  return 'Hello world';
}

console.log(funFun())
console.log(funFun.call())
console.log(funFun.apply())
console.log(funFun.bind())