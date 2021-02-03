"use strict";

/**
 * JSON
 * JsonScript Object Notation
 */

/**
 * 1. Object to JSON
 * stringfy(obj)
 */
let json = JSON.stringify(true);
console.log("json: ", json);

json = JSON.stringify(["apple", "banana"]);
console.log("json: ", json);

// 오브젝트 생성
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"), // javascript 전용 형식은 변환이 안됨
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};
// 오브젝트를 json으로 변환
json = JSON.stringify(rabbit);
console.log(json);

// name, color 키만 변환을 원한다면
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

// 키가 name일때 값을 변경
json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "ellie" : value;
});
console.log(json);

/**
 * 2. JSON to Object
 * parse(json)
 */

// 위에서 json으로 변환된 것을 object로 다시 변환한다.
let obj = JSON.parse(json);
console.log(obj);
//{name: "ellie", color: "white", size: null, birthDate: "2020-12-29T10:14:58.310Z"}
/**
 * 결과 값에는 rabbit에 있던 jump()메서드가 없다. - 메서드 js전용 값들은 변환에서 제외된다.
 */

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
/**
 * birthDate의 경우에도 오브젝트가 생성될땐 메서드로 작성되었고 변환 후엔 스트링으로 변경되었다.
 *
 * 다시 date타입으로 변경해 넣기
 */
obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
