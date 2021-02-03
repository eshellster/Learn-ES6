/**
 * 데코레이터를 이해하기 전에 설명자(Descriptor)에 대해 먼저 알아야 한다.
 */
const obj = {
  num: 42,
};
console.log(Object.getOwnPropertyDescriptor(obj, "num"));
// configurable: true
// enumerable: true
// value: 42
// writable: true

Object.defineProperty(obj, "num", { writable: false });

obj.num = 0;

console.log(obj);

Object.defineProperty(obj, "num", { enumerable: false });

console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));
/**
 * getter setter
 */
const car = {
  model: "x5",
  maker: "bmw",
  color: "white",

  /*
  get detail() {
    return `${this.color} ${this.model}`;
  },
  set detail(desc = "") {
    const [color, model] = desc.split(" ");
    this.color = color;
    this.model = model;
  },
  */
};

Object.defineProperty(car, "detail", {
  get: function () {
    return `${this.color} ${this.model}`;
  },
  set: function (desc) {
    const [color, model] = desc.split(" ");
    this.color = color;
    this.model = model;
  },
});
console.log(car.detail);
console.log(car);
