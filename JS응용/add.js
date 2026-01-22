// 화살표 함수를 사용하여 두 숫자의 합을 반환하는 함수

// 화살표 함수로 add 함수 정의
const add = (a, b) => {
    return a + b;
};

// 2와 3의 합을 구하여 sum 변수에 저장
const sum = add(2, 3);

// 결과 출력
console.log('2와 3의 합:', sum);

// 더 간단한 화살표 함수 버전 (한 줄로)
const addSimple = (a, b) => a + b;
const sumSimple = addSimple(2, 3);
console.log('간단 버전:', sumSimple);
