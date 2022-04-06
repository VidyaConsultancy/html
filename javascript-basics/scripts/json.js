const json = {
  name: "John Doe",
  age: 22,
  hobbies: ["reading", "writing", "coding"],
};

const jsonstring = JSON.stringify(json);
console.log(jsonstring, typeof jsonstring);
const jsonObj = JSON.parse(jsonstring);
console.log(jsonObj, typeof jsonObj);
