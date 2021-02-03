/**
 * Objects
 * one of the Javascript's data types.
 * a collecion of related data and/or functionality.
 * Nearly all objects in JavaScript are instances of Object
 * object = { key : value }
 */

/**
 * 1. Literals and properties
 */
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(`이름 : ${person.name}`);
  console.log(`나이 : ${person.age}살`);
}

const ellie = { name: "ellie", age: 4 };

print(ellie);

/**
 * with JavaScript magic (dynamically typed language)
 * can add properties later 상수 선언 이후에도 값을 추가할 수 있다.(js 특징)
 */
ellie.hasJob = true;
console.log(ellie.hasJob);

/**
 * 2. Computed properties
 *
 * key는 반드시 스트링 타입으로 해야한다.
 */

console.log(ellie["name"]); // Computed properties
ellie["hasJob"] = true; // Computed properties
console.log(ellie.hasJob);

/**
 * "."을 사용하는 것은 코딩하는 순간 그 키에 해당하는 값을 받아오고 싶을 때 (일반적인 경우)
 */
console.log(ellie.name);

/**
 * "[]" 컴퓨티드 프로퍼티는 정확히 어떤 키가 필요할지 모를 때 즉 run time에서 결정될 때
 *
 * Computed properties 예제
 *
 * "."으로 접근하면 현재의 key 즉 정의되지 않은 key 값을 가져오게 됨으로 undefined 된다.
 */
function printValue(obj, key) {
  console.log(obj.key);
}
printValue(ellie, "name");
// undefined

// 이때 "[]" Computed properties로 값을 지정해 주면 run time에 값을 가져오게된고 이름이 출력된다.
function printValueCP(obj, key) {
  console.log(obj[key]);
}
printValueCP(ellie, "name");
// ellie

/**
 * 3. Property value shorthand
 */
// 반복된 방법으로 생성
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "ave", age: 4 };
// function을 사용한 방법
const person4 = makePerson("ellie", 30);
console.log(person4);
// { name: "ellie", age: 30 }
function makePerson(name, age) {
  return {
    name, // name = name,
    age, // age = age
  };
}

/**
 * 4. Constructor Function
 */
// class와 비슷한 방법 (인스턴스 오브젝트를 만듦) class와 마찮가지로 "new"가 필요함
const person5 = new Person("eshell", 20);
console.log(person5);
// Person {name: "eshell", age: 20}
function Person(name, age) {
  // this = {}; <- 생략된 내용
  this.name = name;
  this.age = age;
  // return thin; <- 생략된 내용
}

/**
 * 5. in operator: property existence check (key in obj)
 * 오브젝트에 key가 존재하는지 확인하는 것
 */
console.log("name" in ellie);
// true
console.log("age" in ellie);
// true
console.log("random" in ellie);
// false

/**
 * 6. for..in vs for..of
 */

/**
 * for (key in obj)
 */
console.clear();
for (key in ellie) {
  console.log(key);
}
// name
// age
// hasJob

/**
 *  for (value of iterable)
 * 어레이 순차 출력
 */
const array = [1, 2, 3, 4, 5];
// 기존방식
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// 1
// 2
// 3
// 4
// 5

// 개선된 방식
for (let value of array) {
  console.log(value);
}
// 1
// 2
// 3
// 4
// 5

/**
 * 7. Fun cloning
 * Object.assign(dest, [obj1, obj2, obj3...])
 */

/**
 * user2가 user과 같다고 선언하면 user이 가르키는 포인터 값이 user2에 전달된다.
 *  두개 모두 "{ name: "ellie", age: "20" }"를 가르킨다.
 * 따라서 user2를 통해 name값을 변경하면 user의 name값도 변경되는 것이다.
 */
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "change";
console.log(user);

/**
 * 깊은 복사
 * old way
 */

const user3 = {};
for (key in user) {
  user3[key] = user[key];
  // 헷갈릴 수 있다. 여기서 user3[key]는 유저3의 키를 선언, user[key]는 값을 가져오는 것이다..
}
console.log(user);
user3.name = "new";
console.log(user3);

/**
 * new way
 */
const user4 = {};
Object.assign(user4, user);
// 한줄로 표현할 땐
// const user4 = Object.assign({}, user);
// "user4"가 "{}"로 대체된다.
user4.name = "assign";
console.log(user4);

/**
 * assign 유의할점
 * 여러 값이 복제될때
 */
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "green" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed.color);
// green
console.log(mixed.size);
// big

// fruit가 차례대로 덮어쓰기가 되어 마지막에 입력된 값이 최종값이 된다.
