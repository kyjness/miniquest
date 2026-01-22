// 1. 선언 방식: Promise를 변수에 직접 할당
const myFirstPromise = new Promise((resolve, reject) => {
  // Promise를 성공 상태로 만들고 "Hello, Promise!" 메시지를 전달합니다.
  resolve("Hello, Promise!");
});

// 아래 코드는 수정하지 마세요.
myFirstPromise.then(message => {
  console.log(message);
});

// 2. 함수 형식: Promise를 반환하는 함수
function createPromise() {
  return new Promise((resolve, reject) => {
    // Promise를 성공 상태로 만들고 "Hello, Promise!" 메시지를 전달합니다.
    resolve("Hello, Promise!");
  });
}

// 함수 형식 사용 예제
const mySecondPromise = createPromise();
mySecondPromise.then(message => {
  console.log(message);
});
