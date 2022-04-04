function capitalize(str) {
  const capitalized = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return capitalized;
}

console.log(capitalize("HELLO"));
console.log(capitalize("HEllo"));
console.log(capitalize("HeLLO"));
console.log(capitalize("hELLO"));

function isPallindromic(str) {
  const reversedStr = str.toLowerCase().split("").reverse().join("");
  return str.toLowerCase() === reversedStr;
}

console.log(isPallindromic());
console.log(isPallindromic("Sos"));
console.log(isPallindromic("hello"));
console.log(isPallindromic("world"));
