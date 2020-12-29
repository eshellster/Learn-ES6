"use strict";

/**
 *  Array 🎉
 */

/**
 * 1. Declaration
 */
const arr1 = new Array();
const arr2 = [1, 2];

/**
 * 2. Index position
 */
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

/**
 * 3. Looping over an array
 *
 * print all fruites
 * a.for
 */

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

/**
 * 4. Addtion, deletion copy
 * push: add an item to the end
 */
fruits.push("🍓", "🍑");
console.log(fruits);

/**
 * pop: remove an item from the end
 */
fruits.pop();
fruits.pop();
console.log(fruits);

/**
 * unshift: add an item to the benigging
 * shift: remove an item from the benigging
 */
fruits.unshift("🥝", "🍇", "🍈");
console.log(fruits);

fruits.shift();
fruits.shift();
fruits.shift();
console.log(fruits);
//["🍎", "🍌"]

// note!! shift, unshift are slower than pop, push
// 두 펑션은 맨 앞의 값을 삭제하거나 삽입할때 다른 값들이 전부 한번씩 자리를 이동한다.

/**
 * splice: remove an item by index position
 */
fruits.push("🥝", "🍇", "🍈");
console.log(fruits);
// ["🍎", "🍌", "🥝", "🍇", "🍈"]
fruits.splice(1);
console.log(fruits);
// ["🍎"]

fruits.push("🥝", "🍇");
console.log(fruits);
//["🍎", "🥝", "🍇"]
fruits.splice(1, 1, "🍏", "🍒");
console.log(fruits);

/**
 * concat: combine two arrays
 */
const fruits2 = ["🥬", "🥦"];
console.log(fruits2);
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

/**
 * 5. Searching
 */

/**
 * indexOf: find the index
 */
console.clear();
console.log(fruits);
//["🍎", "🍏", "🍒", "🍇"]
console.log(fruits.indexOf("🍎"));
// 0
console.log(fruits.indexOf("🍇"));
// 3
console.log(fruits.indexOf("🍖"));
// -1

/**
 * includes
 */
console.log(fruits.includes("🍇"));
// true
console.log(fruits.includes("🍖"));
// false

/**
 * lastIndexOf
 */
console.clear();
fruits.push("🍎");
console.log(fruits);
// ["🍎", "🍏", "🍒", "🍇", "🍎"]
console.log(fruits.indexOf("🍎"));
// 0
console.log(fruits.lastIndexOf("🍎"));
// 4
console.log(fruits.toLocaleString());
console.log(fruits.toString());
