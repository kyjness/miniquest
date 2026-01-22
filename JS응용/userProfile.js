// userProfile.js - User 클래스를 내보내는 모듈

// 사용자의 이름(name)과 나이(age)를 속성으로 갖는 User 클래스
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // 사용자 정보를 반환하는 메소드 (선택사항)
    getInfo() {
        return `${this.name}님은 ${this.age}세입니다.`;
    }
}

// Default Export로 클래스를 내보내기
export default User;
