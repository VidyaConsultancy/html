class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

class Employee extends Person {
    constructor(name, age, dept) {
        super(name ,age)
        this.dept = dept;
    }
}

const p1 = new Person();
console.log(p1);
console.log(p1.greet());
