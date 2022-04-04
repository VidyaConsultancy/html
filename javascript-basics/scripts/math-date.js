console.log(Math.PI);
console.log(2 * Math.PI * 10);
console.log(Math.abs(-10));
console.log(Math.fround(19 / 3));
console.log(Math.floor(3.6));
console.log(Math.ceil(3.2));

console.log(Math.min(4, 6, 7, 8, 1, 10));
console.log(Math.max(4, 6, 7, 8, 1, 10));
console.log(Math.random());

const getRandom = (min, max) => Math.random() * (max - min) + min;
console.log(getRandom(1, 10));

const today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay());
console.log(today.toISOString());
