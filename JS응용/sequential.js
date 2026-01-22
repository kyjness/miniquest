// 비동기 작업을 사용한 순차 실행 예제

// 1. 콘솔에 'Start'를 출력합니다.
console.log('Start');

// 2. setTimeout을 사용하여, 1초 후에 'Async Operation Complete'를 출력합니다.
setTimeout(() => {
    console.log('Async Operation Complete');
}, 1000);

// 3. setTimeout의 호출 이후, 즉시 'End'를 출력합니다.
console.log('End');

/*
출력 순서:
1. 'Start'
2. 'End'
3. 'Async Operation Complete' (1초 후)

실행 순서 설명:
- JavaScript는 싱글 스레드 이벤트 루프를 사용합니다.
- 동기 코드는 즉시 실행됩니다: 'Start' → 'End'
- setTimeout은 비동기 함수로, 콜백 함수를 지정된 시간(1초) 후에 실행하도록 예약만 합니다.
- setTimeout을 호출한 후, 코드는 기다리지 않고 즉시 다음 줄('End')을 실행합니다.
- 1초가 지나면 이벤트 루프가 콜백 함수를 실행하여 'Async Operation Complete'가 출력됩니다.
- 따라서 'End'가 'Async Operation Complete'보다 먼저 출력됩니다.
*/
