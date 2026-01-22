// 클로저를 사용한 카운터 함수
function createCounter() {
  // 지역 변수 count (클로저로 캡슐화됨)
  let count = 0;

  // 3개의 메서드를 가진 객체 반환
  return {
    // 1. increment: 1씩 숫자를 증가시킵니다.
    increment() {
      count++;
      return count;
    },

    // 2. decrement: 1씩 숫자를 감소시킵니다.
    decrement() {
      count--;
      return count;
    },

    // 3. getCount: 현재 숫자를 반환합니다.
    getCount() {
      return count;
    }
  };
}

// 사용 예제
console.log("=== 카운터 함수 사용 예제 ===");

// 카운터 인스턴스 생성
const counter1 = createCounter();
const counter2 = createCounter();

console.log("counter1 초기값:", counter1.getCount()); // 0
console.log("counter2 초기값:", counter2.getCount()); // 0

// counter1 조작
counter1.increment();
counter1.increment();
counter1.increment();
console.log("counter1 3번 증가 후:", counter1.getCount()); // 3

counter1.decrement();
console.log("counter1 1번 감소 후:", counter1.getCount()); // 2

// counter2 조작 (독립적인 카운터)
counter2.increment();
console.log("counter2 1번 증가 후:", counter2.getCount()); // 1

console.log("\n=== 클로저의 특징 ===");
console.log("counter1과 counter2는 서로 독립적인 count 값을 가집니다.");
console.log("count 변수는 외부에서 직접 접근할 수 없습니다 (캡슐화).");

/*
설명:

1. 클로저 (Closure):
   - createCounter 함수 내부의 count 변수는 함수 외부에서 접근할 수 없습니다.
   - 반환된 객체의 메서드들은 count 변수에 접근할 수 있습니다 (클로저).
   - 각 카운터 인스턴스는 독립적인 count 값을 가집니다.

2. 캡슐화:
   - count 변수는 private처럼 동작합니다.
   - increment, decrement, getCount 메서드를 통해서만 접근 가능합니다.

3. 독립성:
   - createCounter()를 여러 번 호출하면 각각 독립적인 카운터가 생성됩니다.
   - counter1과 counter2는 서로 영향을 주지 않습니다.

실행 결과:
counter1 초기값: 0
counter2 초기값: 0
counter1 3번 증가 후: 3
counter1 1번 감소 후: 2
counter2 1번 증가 후: 1
*/
