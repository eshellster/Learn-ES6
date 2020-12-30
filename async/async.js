"use strict";

/**
 * async & await
 *
 * clear style of using promise :)
 */
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs...
    resolve("ellie");
  });
}
//  Promise {<fulfilled>: "ellie"}
// 아래와 같이 async를 펑션 앞에 작성하고 Promise를 제거했지만 결과는 똑같이 나온다.
async function fetchUser() {
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

/**
 * 2. await ✨
 */

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  // throw "error";
  return "🍎";
}

async function getBanana() {
  await delay(500);
  return "🍌";
}

function pickFruits() {
  return getApple() //
    .then((apple) => {
      return getBanana() //
        .then((banana) => `${apple} + ${banana}`);
    });
}
pickFruits().then((result) => console.log("pickFruits1", result));

// async
async function pickFruits2() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple}${apple} + ${banana}${banana}`;
}

pickFruits2().then((result) => console.log("pickFruits2", result));

/**
 *  병렬로 처리
 *
 * 위의 코드는 순차적으로 작동함으로 실제로 서버에서 데이터를 가져오는 상황에서는 불필요한 딜레이가 발생한다.
 * 앞서 설명에서 프로미스는 선언과 동시에 작동하는 성질을 가지고 있다고 했다. 그러한 성질을 이용한다.
 * */

async function pickFruits3() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}${apple}${apple} + ${banana}${banana}${banana}`;
}

pickFruits3().then((result) => console.log("pickFruits3", result));

// pickFruits3 🍎🍎🍎 + 🍌🍌🍌  <- 가장 먼저 출력
// pickFruits1 🍎 + 🍌
// pickFruits2 🍎🍎 + 🍌🍌

/**
 * Promise.all()
 *
 * 위의 방법이 상당히 번거롭다. 이걸 간단히 처리하는 API가 있다.
 */

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) => {
    return fruits.join(" + ");
  });
}
pickAllFruits().then((result) => console.log("pickAllFruits", result));

// pickFruits3 🍎🍎🍎 + 🍌🍌🍌
// pickAllFruits 🍎 + 🍌
// pickFruits1 🍎 + 🍌
// pickFruits2 🍎🍎 + 🍌🍌

/**
 * 병렬작동시 가장먼저 도착한 데이터만 표시하고 싶을때
 *
 *  Promise.race()
 */

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then((result) => console.log("pickOnlyOne", result));

// pickOnlyOne 🍌  <- 바나나만 나왔음!
// pickFruits3 🍎🍎🍎 + 🍌🍌🍌
// pickAllFruits 🍎 + 🍌
// pickFruits1 🍎 + 🍌
// pickFruits2 🍎🍎 + 🍌🍌
