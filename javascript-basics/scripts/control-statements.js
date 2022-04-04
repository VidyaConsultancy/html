const num = 31;

if (num > 30) {
  console.log(`${num} is greater than 30`);
} else if (num > 20) {
  console.log(`${num} is greater than 20`);
} else {
  console.log(`${num} is less than 20`);
}

const fruit = "PineApple";
switch (fruit) {
  case "Apple":
    console.log(`It is an Apple`);
    break;

  case "Mango":
    console.log(`It is a Mango`);
    break;

  default:
    console.log(`I don't know this fruit`);
    break;
}
