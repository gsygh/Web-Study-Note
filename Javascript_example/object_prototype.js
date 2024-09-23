// // 객체 생성 시 new 입력
// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.say = function() {
//         console.log(sound);
//     };
// }

// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

// dog.say();
// cat.say();

// prototype 설정
// function Animal(type, name, sound) {
//     this.type = type;
//     this.name = name;
//     this.sound = sound;
// }
// // 모든 함수에 해당 함수를 포함시킴
// Animal.prototype.say = function() {
//     console.log(this.sound);
// }
// Animal.prototype.sharedValue = 1;

// const dog = new Animal('개', '멍멍이', '멍멍');
// const cat = new Animal('고양이', '야옹이', '야옹');

// dog.say();
// console.log(dog.sharedValue);
// cat.say();
// console.log(cat.sharedValue);


// 객체 생성자 상속받는 코드
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;


// 모든 함수에 해당 함수를 포함시킴
Animal.prototype.say = function() {
    console.log(this.sound);
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();