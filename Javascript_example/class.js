// 클래스
// class Animal {
//     // 생성자
//     constructor(type, name, sound) {
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//     }

//     say() {
//         console.log(this.sound);
//     }
// }

// class Dog extends Animal {
//     constructor(name, sound) {
//         super('개', name, sound);
//     }
// }
// class Cat extends Animal {
//     constructor(name, sound) {
//         super('고양이', name, sound);
//     }
// }

// const dog = new Dog('멍멍이', '멍멍');
// const cat = new Cat('야옹이', '야옹'); 

// dog.say();
// cat.say();

// 예제2
class Food {
    constructor(name) {
        this.name = name;
        this.brands = [];
    }
    addBrand(brand) {
        this.brands.push(brand)
    }
    print() {
        console.log(`${this.name}을/를 파는 음식점들:`)
        console.log(this.brands.join(', '));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chicken = new Food('치킨');
chicken.addBrand('굽네치킨');
chicken.addBrand('BBQ');

pizza.print()
chicken.print();