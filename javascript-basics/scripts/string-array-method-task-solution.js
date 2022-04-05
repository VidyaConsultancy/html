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

console.log(isPallindromic("sos"));
console.log(isPallindromic("Sos"));
console.log(isPallindromic("hello"));
console.log(isPallindromic("world"));

function capitalizeSentence(str) {
  const strArray = str.split(" ");
  const capitalizedWords = [];
  for (const word of strArray) {
    const capitalized = capitalize(word);
    capitalizedWords.push(capitalized);
  }
  return capitalizedWords.join(" ")
}

function convertToSentenceCase(str) {
  const sentences = str.split(". ");
  const result = []
  for (const sentence of sentences) {
    result.push(sentence[0].toUpperCase() + sentence.slice(1).toLowerCase());
  }
  return result.join(". ");
}

console.log(capitalizeSentence('hello worLD'));
console.log(
  capitalizeSentence(
    "lorem ipsum dolor sit, amet consectetur adipisicing elit. eius, sed commodi molestiae omnis quia quidem aliquam Eos inventore optio velit"
  )
);

console.log(
  convertToSentenceCase(
    "lorem ipsum dolor sit, amet consectetur adipisicing elit. eius, sed commodi molestiae omnis quia quidem aliquam Eos inventore optio velit impedit quasi qui, distinctio et recusandae tenetur quae, sapiente cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, sed commodi molestiae omnis quia quidem aliquam eos inventore optio velit impedit quasi qui, distinctio et recusandae tenetur quae, sapiente cumque."
  )
);


function isPrime(n) {
  if(n <= 1) {
    return false
  }
  for (let index = 2; index < n; index++) {
    if(n % index === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(2))
console.log(isPrime(12))
console.log(isPrime(19))
console.log(isPrime(81))

function firstNPrimeNumbers(n) {
  let count = 0;
  let num = 2;
  const primeNumbers = [];
  while(count < n) {
    if(isPrime(num)) {
      count++;
      primeNumbers.push(num)
    }
    num++
  }
  return primeNumbers;
}

console.log(firstNPrimeNumbers(10));
console.log(firstNPrimeNumbers(20));