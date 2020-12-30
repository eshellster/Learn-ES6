"use strict";

/**
 * Promise is a JavaScript object for asynchronous operation.
 *
 * State: pending -> fulfilled or rejected
 * Producer vs Consumer
 */

/**
 * 1. Producer
 *
 * when new Promise is created, the executor runs automatically.
 */
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    reject(new Error("no network"));
  }, 2000);
});

/**
 * 2. Consumers: then, catch, finally
 */
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

/**
 * 3. Promise chaining
 */
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

/**
 * 4. Error handling
 */
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

// 인자를 한가지만 전달하는 경우 아래와 같이 생략한다.

getHen() //
  .then(getEgg)
  .then(cook)
  .then(console.log);

// 에러 발생시키기

const getEggError = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🐣`)), 1000);
  });

getHen() //
  .then(getEggError) // 에러 발생 reject
  .then(cook)
  .then(console.log);

// 시스템 오류 제거
getHen() //
  .then(getEggError) // 에러 발생 reject
  .then(cook)
  .then(console.log)
  .catch(console.log); // 에러를 마지막에 출력

// 에러 발생시 다른걸로 대체
getHen() //
  .then(getEggError) // 에러 발생 reject
  .catch((error) => {
    return "🍔";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log); // 에러를 마지막에 출력
