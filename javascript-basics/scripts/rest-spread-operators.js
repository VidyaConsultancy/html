const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const person = {
  name: "John Doe",
  age: 30,
  height: 178,
  weight: 67,
  hobbies: ["reading", "writing", "coding"],
  address: {
    street: "Baker Street",
    city: "London",
    country: "England",
    pincode: "SW1F",
    apartment: {
      flat: 101,
      floor: "first",
    },
  },
};

const numbersCopy = [].concat(numbers);
const personCopy = Object.assign({}, person);

numbersCopy[0] = 10;
console.log(numbers, numbersCopy);
personCopy.name = "Jane Doe";
personCopy.hobbies[0] = "painting";
personCopy.address.street = "Baker st";
console.log(person, personCopy);

// operators
// rest operator ...
// spread operator ...

const n1 = [...numbers, 20, 30, 40, ...numbersCopy];
n1[0] = 100;
console.log(numbers, n1);

const p1 = {
  ...person,
  hobbies: [...person.hobbies],
  address: {
    ...person.address,
    apartment: {
      ...person.address.apartment,
    },
  },
};
p1.name = "Jonas Doe";
p1.hobbies[0] = "drwaing";
p1.address.street = "Bank street";
console.log(person, personCopy, p1);

console.log(Math.max(...n1));

const f = numbers[0];
const s = numbers[1];
const t = numbers[2];
const r = numbers.slice(3);
const [f1, , t1, ...r1] = numbers;
console.log(f1, t1, r1);

const name = person.name;
const age = person.age;
const { name: name1, age: age1, ...we } = person;
console.log(name1, age1, we);

const rahul = {
  name: "Rahul Vaidya",
  profession: "Music",
  albums: ["2002", "2010", "2020", "2022"],
  instruments: ["Guitar", "Sitar", "Drum"],
};

const prakash = {
  ...rahul,
  albums: [...rahul.albums],
  instruments: [...rahul.instruments],
};

prakash.name = "Prakash Raj";
prakash.instruments[0] = "Veena";
console.log(rahul, prakash);
