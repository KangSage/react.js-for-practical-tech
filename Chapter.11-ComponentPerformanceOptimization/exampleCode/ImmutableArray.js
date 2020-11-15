const array = [1, 2, 3, 4, 5];
const nextArrayBad = array; // call by ref. 배열을 복사하는 것이 아니라 똑같은 배열을 가리킴.
nextArrayBad[0] = 100;
console.log(array === nextArrayBad); // 완전히 같은 배열이기 때문에 true

const nextArrayGood = [...array]; // 배열의 내부 값을 모두 복사
nextArrayGood[0] = 100;
console.log(array === nextArrayGood);

const object = {
  foo: "bar",
  value: 1,
};

const nextObjectBad = object; // call by ref.  객체 복사가 안되고 같은 객체를 가리킴.
nextObjectBad.value = nextObjectBad.value + 1;
console.log(object === nextObjectBad); // 각은 객체이기 때문에 true

const nextObjectGood = {
  ...object, // 객체의 내용을 모두 복사 (객체 속의 객체까지 딥카피되진 않는다.)
  value: object.value + 1, // 새로운 값을 덮어 쓴다.
};

console.log(object === nextObjectGood); // 다른 객체이므로 false
