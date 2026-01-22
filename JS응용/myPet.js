// 1. 객체 리터럴
const myPet1 = {
    name: 'Momo',
    type: 'Cat'
}
console.log('1. 객체 리터럴:');
console.log(myPet1.name);
console.log(myPet1.type);

// 2. 생성자 함수
function MyPet(name, type) {
    this.name = name;
    this.type = type;
}
const myPet2 = new MyPet('Momo', 'Cat');
console.log('\n2. 생성자 함수:');
console.log(myPet2.name);
console.log(myPet2.type);

// 3. 클래스 방식
class MyPetClass {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}
const myPet3 = new MyPetClass('Momo', 'Cat');
console.log('\n3. 클래스 방식:');
console.log(myPet3.name);
console.log(myPet3.type);
