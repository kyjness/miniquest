// operations.js - 두 숫자를 더하고 빼는 함수를 내보내는 모듈

// 두 숫자를 더하는 함수
function add(a, b) {
    return a + b;
}

// 두 숫자를 빼는 함수
function subtract(a, b) {
    return a - b;
}

// Named Export를 사용하여 두 함수를 내보내기
export { add, subtract };
