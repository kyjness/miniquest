// 배열의 각 요소에 2를 곱한 새 배열을 만드는 함수 - 3가지 프로그래밍 패러다임 (map 사용)

const numbers = [1, 2, 3, 4, 5];

// ============================================
// 1. 절차 지향 프로그래밍 (Procedural Programming)
// ============================================
// map을 절차적으로 사용하는 방식
function multiplyByTwoProcedural(arr) {
    return arr.map((currentValue) => {
        return currentValue * 2;
    });
}

const result1 = multiplyByTwoProcedural(numbers);
console.log('1. 절차 지향 프로그래밍 (map 사용):', result1);

// ============================================
// 2. 객체 지향 프로그래밍 (Object-Oriented Programming)
// ============================================
// map 메소드를 객체의 메소드로 사용하는 방식
class NumberMultiplier {
    constructor(numbers) {
        this.numbers = numbers;
    }
    
    multiplyByTwo() {
        return this.numbers.map((currentValue) => {
            return currentValue * 2;
        });
    }
}

const multiplier = new NumberMultiplier(numbers);
const result2 = multiplier.multiplyByTwo();
console.log('2. 객체 지향 프로그래밍 (map 사용):', result2);

// ============================================
// 3. 함수형 프로그래밍 (Functional Programming)
// ============================================
// map 메소드를 사용하는 방식 (함수형의 핵심)
const result3 = numbers.map((currentValue) => {
    return currentValue * 2;
});

console.log('3. 함수형 프로그래밍 (map 사용):', result3);

// 더 간단한 함수형 버전
const resultFunctional = numbers.map(num => num * 2);
console.log('3. 함수형 프로그래밍 (간단 버전):', resultFunctional);
