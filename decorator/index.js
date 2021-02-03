// const Title = (title) => {
//   const Body = document.querySelector("body");
//   Body.innerHTML = `<head><h1 style="border-bottom: solid 5px skyblue; display: inline">${title}</h1></head>`;
// };
// Title("decorator");
/**
 * 클래스의 속성을 작성하기 위해 데코레이터를 사용
 */
const hottock = {
  thickness: 20,
  flavor: "Brown Sugar Cinnamon",
};
/**
 * 자바스립트에는 각 속성은 값 이외에도 숨겨진 정보가 있는데 이것을 속성 설명자라 한다.
 * getOwnPropertyDescriptor로 속성 설명자를 가져올 수 있다.
 * defineProperty는 속성 설명자를 재설정한다.
 */
console.log(
  "속성을 변경하기 전 ",
  Object.getOwnPropertyDescriptor(hottock, "thickness")
);
/*
{
   value: 20,
   writable: true, 
   enumerable: true, 
   configurable: true
}
 */

/**
 * 구성 가능(configurable)은
 *   속성 유형을 변경하거나, 객체에서 속성을 삭제할 수 있는지를 결정한다.
 * 열거 가능(enumerable)은
 *   Object.keys(oatmeal)를 호출하거나 for 루프에서 사용할 때처럼 객체의 속성을 열거할 때 속성을 표시할지 여부를 제어한다.
 * 쓰기 가능(writable)은
 *   할당 연산자 =를 통해 속성값을 변경할 수 있는지를 제어한다.
 * 값(value)은
 *   접근할 때 표시되는 속성의 정적 값이다. 속성 설명자 중에 유일하게 쉽게 볼 수 있고, 주로 우리가 관심을 두고 보는 부분이다. 함수를 포함한 모든 자바스크립트의 값이 올 수 있으며, 이 속성은 속성을 자신이 속한 객체의 메소드로 만든다.
 */

/**
 * decorator 없이 꾸며보기
 */

/**
 * getOwnPropertyDescriptor로 속성 설명자를 가져올 수 있다.
 * defineProperty는 속성 설명자를 재설정한다.
 */

Object.defineProperty(hottock, "thickness", {
  value: 10,
  writable: false,
  enumerable: false,
});
Object.defineProperty(hottock, "descript", {
  get: function () {
    return `호떡 두께는 ${this.thickness}`;
  },
});

console.log("after", Object.getOwnPropertyDescriptor(hottock, "thickness"));

// `oatmeal.viscosity`를 다른 값으로 설정하면 조용히 실패하게 될 것이다.
hottock.thickness = 1;
console.log(hottock.thickness);
console.log("thickness 열거 제외 ", Object.keys(hottock));
console.log(hottock.descript);
// => 10

/*
  객체의 특정 속성의 설명자를 직접 수정하는 범용 decorate함수를 작성할 수도 있다.
 */

function decorate(obj, property, callback) {
  const descriptor = Object.getOwnPropertyDescriptor(obj, property);
  Object.defineProperty(obj, property, callback(descriptor));
  console.log(descriptor);
}

decorate(hottock, "thickness", function (desc) {
  desc.writable = true;
  desc.configurable = false;
  desc.value = 200;
  return desc;
});
console.log(hottock.thickness);

/**
 * 데코레이터 작성
 */

function readOnly(target, key, descriptor) {
  return {
    ...descriptor,
    writable: false,
  };
}

/*
  js의 데코레이터는 클래스에만 적용된다. 따라서 좀 거창한 클래스를 만들게 되었다.
 */

class Jook {
  constructor(viscosity = 10) {
    this.viscosity = viscosity;
  }
  stir() {
    if (this.viscosity > 15) {
      console.log("걸죽함니다.");
    } else {
      console.log("부드러워요");
    }
  }
}

class Hobakjook extends Jook {
  constructor(flavor) {
    super();
    this.flavor = flavor;
  }
  @readOnly
  getDescript() {
    return `이 호박죽은 걸죽한 정도가 ${this.viscosity} 입니다.`;
  }
  // viscosity = 20;
}

const hobakjook = new Hobakjook("옹심이 팥앙");
console.log(hobakjook.getDescript());

/*
Hobakjook {
  viscosity: 10, 
  flavor: "옹심이 팥앙"
}
*/
