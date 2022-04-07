/**
 * string
 * number
 * boolean
 * array
 * object
 * null
 * undefined
 *
 * enum
 * union
 */

let a: number = 10;
let s: string;
s = "";
let ar: number[] = [10];
let arr: Array<string>;

type TPerson = { name: string; age: number };
interface IPerson {
  name: string;
  age: number;
  greet: () => string;
}
class CPerson implements IPerson {
  name: string;
  age: number;

  constructor() {
    this.name = "Arpit";
    this.age = 29;
  }

  greet() {
    return this.name;
  }
}
const person = new CPerson();

let o: TPerson = { name: "Arpit", age: 29 };

function add(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") return a + b;
  if (typeof a === "string" && typeof b === "string") return a + b;
  return "Invalid arguments passed to the function";
}

add(10, 10);

const sub = function (a: number, b: number): number {
  return a - b;
};
