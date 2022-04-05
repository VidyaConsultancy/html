// callbacks
// asynchronus nature of js
const a = 10;
function funFun(fn) {
  const result = [];
  for (let index = 1; index <= 100; index++) {
    const temp = index * index;
    result.push(temp);
  }
  fn("hello");
  return result;
}

function funAsync(cb) {
  setTimeout(function () {
    console.log("Inside timeout");
    const sum = 10 + 20;
    cb(sum);
  }, 1000);
}

const c = funAsync(function (v) {
  console.log(v);
});
console.log(c);
console.time();
function f(str) {
  console.log("inside a cb", str);
}
const b = funFun(f);
console.log(b);
console.timeEnd();

// pending, completed
// pending, resolved, rejected
function aPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sum = 10 + 20;
      resolve(sum);
    }, 1000);
  });
}

aPromise()
  .then((res) => {
    console.log("res", res);
  })
  .catch((error) => {
    console.error("error", error);
  });

async function asyncFun() {
  const res = await aPromise().catch((err) => console.log("err", err));
  console.log("in asyncFun res", res);
}

asyncFun();
