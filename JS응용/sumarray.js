// 배열 선언
// 화살표 함수를 사용하여 배열 내의 모든 숫자를 더하는 함수
const numbers = [1, 2, 3, 4, 5];
// 화살표 함수로 sumArray 함수 정의
const sumArray = (arr) => {
    let sum = 0;
    // 반복문을 사용하여 배열의 모든 요소를 더하기
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

// [1, 2, 3, 4, 5] 배열의 숫자를 모두 더한 결과를 total 변수에 저장
const total = sumArray(numbers);

// 결과 출력
console.log('배열:', numbers);
console.log('합계:', total);

// 다른 반복문 방식들 (참고용)
console.log('\n=== 다른 반복문 방식들 ===');

// for...of 루프 사용
const sumArrayForOf = (arr) => {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
};
console.log('for...of 사용:', sumArrayForOf(numbers));

// forEach 사용
const sumArrayForEach = (arr) => {
    let sum = 0;
    arr.forEach(num => {
        sum += num;
    });
    return sum;
};
console.log('forEach 사용:', sumArrayForEach(numbers));
