/**
 * Identifiers
 * A-Z, a-z, 0-9, _
 * can start with a letter a-z A-Z
 * can start with a underscore _ ___
 * can't start with a number
 * variable names are case sensitive
 */

// var, let, const, without any keyword
const str1 = "A quick lazy fox jump over the box";
const str2 = "A quick lazy foxjump over the box";
const a = 10;
const b = 20;
const str3 = `A
quick
lazy
'fox' 
"jump" 
${a} + ${b} = ${a + b}
over 
the 
box`; // template literals
console.log(str3);
const str4 = str1 + " " + str2;
console.log(str4);

const aBool = true;
const bBool = false;

const num = 10;
const float = 20.03;

const name = null;

const numbers = [1, 2, 3, 4, 5, 6];

const obj = {
  name: "John Doe",
  age: 22,
  height: 178,
  weight: 70,
  married: false,
  hobbies: ["reading", "writing"],
  address: {
    city: "Mumbai",
    country: "India",
    pincode: 400078,
  },
  describe: function () {
    return "Hello world";
  },
};
console.log(
  obj["name"],
  obj.age,
  obj.hobbies[0],
  obj["address"].city,
  obj["address"]["city"]
);
