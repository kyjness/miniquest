// let과 const의 재할당 차이점 파악하기

// 1. let으로 선언된 변수 - 재할당 가능
console.log("=== 1. let 변수의 재할당 ===");
let temperature = 25;
console.log("초기값:", temperature);

temperature = 30; // 재할당 성공
console.log("재할당 후:", temperature);

console.log("\n=== 2. const 변수의 재할당 시도 ===");
// 2. const로 선언된 변수 - 재할당 불가능
const MAX_TEMPERATURE = 35;
console.log("초기값:", MAX_TEMPERATURE);

try {
  MAX_TEMPERATURE = 40; // 재할당 시도 → 에러 발생
  console.log("재할당 후:", MAX_TEMPERATURE);
} catch (error) {
  console.log("에러 발생:", error.message);
  console.log("const 변수는 재할당할 수 없습니다.");
}

console.log("\n=== 3. const와 객체/배열의 관계 ===");
// 참고: const로 선언된 객체나 배열의 경우
const person = { name: "홍길동", age: 25 };
console.log("객체 초기값:", person);

// 객체의 속성은 변경 가능 (객체 자체를 재할당하는 것이 아니므로)
person.age = 30;
person.name = "김철수";
console.log("속성 변경 후:", person);

// 하지만 객체 자체를 재할당하는 것은 불가능
try {
  person = { name: "이영희", age: 20 }; // 에러 발생
} catch (error) {
  console.log("객체 재할당 에러:", error.message);
}
