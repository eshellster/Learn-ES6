const Title = (title) => {
  const Body = document.querySelector("body");
  Body.innerHTML = `<head><h1 style="border-bottom: solid 5px skyblue; display: inline">${title}</h1></head>`;
  console.log("bind");
};

/**
 * bind
 */

function sum(num) {
  return num + this.num1 + this.num2;
}

var myObj = { num1: 20, num2: 3 };

var customSum = sum.bind(myObj);

console.log(customSum(5));
