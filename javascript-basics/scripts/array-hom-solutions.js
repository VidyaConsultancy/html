const fruits = [
  "Apple",
  "Mango",
  "Banana",
  "Grapes",
  "Orange",
  "Strawberry",
  "Blueberry",
  "Pineapple",
  "Papaya",
];

fruits.forEach(fruit => console.log(fruit));

const shakes = fruits.map(fruit => `${fruit}shake`)
console.log(shakes)

const filteredFruits = fruits.filter(fruit => fruit.includes('e'))
console.log(filteredFruits)

const fruitPlate = fruits.reduce((a, b) => `${a}| ${b} |`, '')
console.log(fruitPlate);

const ascFruits = [].concat(fruits).sort((a, b) => {
  if(a > b) return 1;
  if(a === b) return 0;
  return -1;
})
const descFruits = [].concat(fruits).sort((a, b) => {
  if (a > b) return -1;
  if (a === b) return 0;
  return 1;
});
console.log(ascFruits)
console.log(descFruits)
