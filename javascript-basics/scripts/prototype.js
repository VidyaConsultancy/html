function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hobbies = ["reading", "writing", "coding"];
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

Person.prototype.likesToDo = function () {
  [1, 2].forEach(() => {
    console.log("hobbies", this.hobbies);
  });
};

const p1 = new Person("Jane", 28);
const p2 = new Person("Smith", 30);
// console.log(p1);
// console.log(p2);
// console.log(p1.greet());
// console.log(p2.greet());
// console.log(p1.likesToDo());

function Employee(name, age, dept) {
  Person.call(this, name, age);
  this.dept = dept;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const e1 = new Employee("Smith", 20, "HR");
// console.log(e1);
// console.log(e1.greet());

function funFun(a, b) {
  console.log(this);
  console.log(a, b);
}

// funFun(10, 20);
const newFunFun = funFun.bind(p1, 100);
// newFunFun(33);
funFun.call(e1, 10, 20, 30, 40, 50);
funFun.apply(p2, [100, 33]);
