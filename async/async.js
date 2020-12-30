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
