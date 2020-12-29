"use strict";

/**
 * Object-oriented programming
 * class: template
 * object: instance of a class
 * JavaScript classes
 * - introduced in ES6
 * - syntactical sugar over prototype-base inheritance
 */

/**
 * 1. Class declarations
 */
class Person {
  // constructor 생성자
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

/**
 * 2. Getter and setters
 */
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  /**
   * Getter과 Setter의 프로퍼티는 기존 프로퍼티와 충돌을 방지하기 위해 살짝 다른게 사용한다.
   * Getter과 Setter의 프로퍼티는 동일한 이름을 사용한다.
   */
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

/**
 * 3. Fields (public, private)
 * Too soon!
 */
class Experiment {
  publicField = 2;
  #privatefield = 0;
}

const experiment = new Experiment();
console.log("publicField:", experiment.publicField);
console.log("privatefield:", experiment.privatefield);

/**
 * 4. Static properties and methods
 * Too soon!
 */
class Article {
  static publisher = "Eream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
