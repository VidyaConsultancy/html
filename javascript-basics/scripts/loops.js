for (let index = 10; index > 0; index--) {
  for (let j = 0; j < 10; j++) {
    if (index === 4) {
      break;
    }
    console.log(index);
  }
  console.log(index);
}

let counter = 0;
while (true) {
  if (counter > 10) {
    break;
  }
  console.log("world");
  counter++;
}

counter = 0;
do {
  console.log("Hello world");
  counter++;
} while (counter < 0);

const fruits = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

const person = {
  name: "John Doe",
  age: 28,
  gender: "Male",
  height: 178,
  weight: 65,
};

for (const key in person) {
  const element = person[key];
  console.log(`${key}:: ${element}`);
}
