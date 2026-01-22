// math.js - 두 숫자를 더하는 함수를 내보내는 모듈

// 두 숫자를 입력받아 더하는 함수
function add(a, b) {
    return a + b;
}

// 함수를 외부에서 사용할 수 있도록 내보내기 (export)
export { add };

// 또는 기본 내보내기로 사용하려면:
// export default add;
