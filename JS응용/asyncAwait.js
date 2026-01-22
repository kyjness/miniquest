// setTimeout을 사용하여 1초 후에 메시지를 반환하는 함수
function waitForMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, Async/Await!");
    }, 1000);
  });
}

// async 함수 선언 형식 1: 일반 함수 선언
async function main1() {
  const message = await waitForMessage();
  console.log(message);
}

// async 함수 선언 형식 2: 화살표 함수
const main2 = async () => {
  const message = await waitForMessage();
  console.log(message);
};

// 함수 실행
main1();
main2();
