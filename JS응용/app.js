// app.js - operations.js와 userProfile.js 모듈을 가져와 사용하는 파일

// operations.js 모듈에서 add와 subtract 함수를 가져오기 (Named Import)
import { add, subtract } from './operations.js';

// userProfile.js 모듈에서 User 클래스를 가져오기 (Default Import)
import User from './userProfile.js';

// operations.js의 함수들 사용 예제
console.log('=== operations.js 사용 예제 ===');
const sum = add(10, 5);
const difference = subtract(10, 5);

console.log('add(10, 5) =', sum);
console.log('subtract(10, 5) =', difference);

// userProfile.js의 User 클래스 사용 예제
console.log('\n=== userProfile.js 사용 예제 ===');
const user1 = new User('홍길동', 25);
const user2 = new User('김영희', 30);

console.log(user1.getInfo());
console.log(user2.getInfo());
console.log('사용자 이름:', user1.name);
console.log('사용자 나이:', user1.age);
