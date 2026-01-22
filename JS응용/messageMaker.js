// 고정 값을 가지는 메시지 생성기 (클로저 사용)
function messageMaker(startMessage) {
  // messageMaker에서 받은 시작 문자열을 클로저로 저장
  
  // makeMessage 함수를 반환
  function makeMessage(additionalMessage) {
    // messageMaker에서 받은 문자열과 makeMessage에서 받은 문자열을 합쳐서 반환
    return startMessage + additionalMessage;
  }
  
  return makeMessage;
}

// 사용 예제
console.log("=== 메시지 생성기 사용 예제 ===");

// 1. "Hello, "로 시작하는 메시지 생성기 만들기
const helloMaker = messageMaker("Hello, ");
console.log(helloMaker("World!")); // "Hello, World!"
console.log(helloMaker("JavaScript!")); // "Hello, JavaScript!"

// 2. "안녕하세요, "로 시작하는 메시지 생성기 만들기
const koreanMaker = messageMaker("안녕하세요, ");
console.log(koreanMaker("홍길동님!")); // "안녕하세요, 홍길동님!"
console.log(koreanMaker("반갑습니다!")); // "안녕하세요, 반갑습니다!"

// 3. "Error: "로 시작하는 메시지 생성기 만들기
const errorMaker = messageMaker("Error: ");
console.log(errorMaker("File not found")); // "Error: File not found"
console.log(errorMaker("Invalid input")); // "Error: Invalid input"

console.log("\n=== 클로저의 특징 ===");
console.log("각 messageMaker 인스턴스는 독립적인 시작 문자열을 가집니다.");
console.log("startMessage 변수는 외부에서 직접 접근할 수 없습니다 (캡슐화).");

/*
설명:

1. 클로저 (Closure):
   - messageMaker 함수 내부의 startMessage 변수는 함수 외부에서 접근할 수 없습니다.
   - 반환된 makeMessage 함수는 startMessage 변수에 접근할 수 있습니다 (클로저).
   - 각 messageMaker 인스턴스는 독립적인 startMessage 값을 가집니다.

2. 동작 방식:
   - messageMaker("Hello, ")를 호출하면, "Hello, "가 startMessage에 저장됩니다.
   - makeMessage 함수가 반환되고, 이 함수는 startMessage를 기억합니다.
   - makeMessage("World!")를 호출하면, "Hello, " + "World!" = "Hello, World!"가 반환됩니다.

3. 재사용성:
   - 같은 시작 문자열을 여러 번 사용할 때 유용합니다.
   - 각 메시지 생성기는 독립적으로 동작합니다.

실행 결과:
=== 메시지 생성기 사용 예제 ===
Hello, World!
Hello, JavaScript!
안녕하세요, 홍길동님!
안녕하세요, 반갑습니다!
Error: File not found
Error: Invalid input
*/
