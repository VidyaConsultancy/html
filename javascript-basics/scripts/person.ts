// access modifiers
// public, private, protected

class Person {
  public name: string;
  private age: number;
  public height: number;
  protected hobbies: string[];

  constructor(name: string, age: number, height: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.hobbies = hobbies;
  }

  public greet(): string {
    return `Hi, I am ${this.name}. ${this.hobbies} ${this.age}`;
  }
}

class Employee extends Person {
  dept: string;

  constructor(
    name: string,
    age: number,
    height: number,
    hobbies: string[],
    dept: string
  ) {
    super(name, age, height, hobbies);
    this.dept = dept;
  }

  public greet(): string {
    return super.greet() + " I work in " + this.dept + " department";
  }

  public hello(name?: string) {

  }
}

const john = new Person("John", 22, 178, ["reading", "writing"]);
const jane = new Employee("Jane", 22, 178, ["reading", "writing"], 'HR');