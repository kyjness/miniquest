// 배열의 모든 요소를 더하는 함수 - 3가지 프로그래밍 패러다임 (reduce 사용)

const numbers = [1, 2, 3, 4, 5];

// ============================================
// 1. 절차 지향 프로그래밍 (Procedural Programming)
// ============================================
// reduce를 절차적으로 사용하는 방식
function sumProceduralWithReduce(arr) {
    return arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
}

const sum1 = sumProceduralWithReduce(numbers);
console.log('1. 절차 지향 프로그래밍 (reduce 사용):', sum1);

// ============================================
// 2. 객체 지향 프로그래밍 (Object-Oriented Programming)
// ============================================
// reduce 메소드를 객체의 메소드로 사용하는 방식
class NumberCalculator {
    constructor(numbers) {
        this.numbers = numbers;
    }
    
    sum() {
        return this.numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    }
}

const calculator = new NumberCalculator(numbers);
const sum2 = calculator.sum();
console.log('2. 객체 지향 프로그래밍 (reduce 사용):', sum2);

// ============================================
// 3. 함수형 프로그래밍 (Functional Programming)
// ============================================
// reduce 메소드를 사용하는 방식 (함수형의 핵심)
const sum3 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log('3. 함수형 프로그래밍 (reduce 사용):', sum3);

// 더 간단한 함수형 버전
const sumFunctional = numbers.reduce((acc, cur) => acc + cur, 0);
console.log('3. 함수형 프로그래밍 (간단 버전):', sumFunctional);

