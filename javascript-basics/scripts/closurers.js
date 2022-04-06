// closures
function counter() {
  let count = 0;

  function increment() {
    return (count = count + 1);
  }

  function decrement() {
    return (count = count - 1);
  }

  return {
    inc: increment,
    dec: decrement,
  };
}

const count = counter();
console.log(count.inc());
console.log(count.inc());
console.log(count.inc());
console.log(count.dec());
console.log(count.dec());
console.log(count.inc());
console.log(count.inc());
console.log(count.dec());
