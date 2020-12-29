"use strict";

/**
 * JavaScript is synchronous.
 * Execute the code block by order after hoisting.
 * hoisting: var, function declaration
 */
console.log(1);
setTimeout(() => console.log(2), 1000);
console.log(3);
// 1
// 3
// 2

/**
 * 2가지의 callback
 * 1. Synchronous callback  동기
 * 2.Asynchronous callback  비동기
 */

/**
 * Synchronous callback
 */
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));
/**
 * Asynchronous callback
 */
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);
