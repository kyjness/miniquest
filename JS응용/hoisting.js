// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
try {
  console.log(messageLet); // 무엇이 출력될까요?
} catch (error) {
  console.log("1. let 에러:", error.message);
}
let messageLet = "Hello with let!";
console.log("1. let 선언 후:", messageLet);

console.log("\n---\n");

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
try {
  console.log(messageConst); // 무엇이 출력될까요?
} catch (error) {
  console.log("2. const 에러:", error.message);
}
const messageConst = "Hello with const!";
console.log("2. const 선언 후:", messageConst);

console.log("\n---\n");

// 3. 화살표 함수의 호이스팅 확인하기
try {
  console.log(greet()); // 무엇이 출력될까요?
} catch (error) {
  console.log("3. 화살표 함수 에러:", error.message);
}
const greet = () => "Hello, Arrow Function!";
console.log("3. 화살표 함수 선언 후:", greet());

console.log("\n---\n");

// 비교: 일반 함수 선언의 호이스팅 (호이스팅됨)
console.log("4. 일반 함수 선언 (호이스팅됨):", normalGreet());
function normalGreet() {
  return "Hello, Normal Function!";
}

/*
실행 결과:
1. let 에러: Cannot access 'messageLet' before initialization
1. let 선언 후: Hello with let!

2. const 에러: Cannot access 'messageConst' before initialization
2. const 선언 후: Hello with const!

3. 화살표 함수 에러: Cannot access 'greet' before initialization
3. 화살표 함수 선언 후: Hello, Arrow Function!

4. 일반 함수 선언 (호이스팅됨): Hello, Normal Function!

설명:

1. let 키워드:
   - ReferenceError: Cannot access 'messageLet' before initialization
   - let과 const는 호이스팅되지만, "Temporal Dead Zone(TDZ)"에 있습니다.
   - 변수가 선언되기 전에 접근하면 에러가 발생합니다.
   - 변수는 선언되기 전까지 사용할 수 없습니다.
   - 선언 후에는 정상적으로 사용 가능합니다.

2. const 키워드:
   - ReferenceError: Cannot access 'messageConst' before initialization
   - let과 동일하게 TDZ에 있어서 선언 전 접근 시 에러가 발생합니다.
   - const는 선언과 동시에 초기화해야 하며, 재할당이 불가능합니다.
   - 선언 후에는 정상적으로 사용 가능합니다.

3. 화살표 함수:
   - ReferenceError: Cannot access 'greet' before initialization
   - 화살표 함수는 const/let으로 선언된 변수에 할당되므로 TDZ에 있습니다.
   - 일반 함수 선언(function greet())과 달리 호이스팅되지 않습니다.
   - 일반 함수 선언은 호이스팅되어 선언 전에도 호출 가능하지만,
     화살표 함수는 변수 선언이므로 선언 전에는 사용할 수 없습니다.
   - 선언 후에는 정상적으로 호출 가능합니다.

4. 일반 함수 선언 (비교용):
   - 일반 함수 선언(function 키워드)은 호이스팅되어 선언 전에도 호출 가능합니다.
   - 함수 선언은 전체가 호이스팅되므로, 코드 어디서든 호출할 수 있습니다.
*/
