// 연산 처리 순서 ! > && > ||

// == === 차이
// == : Equal Operator, 같음을 비교 
// === : Data Type 까지 같은지 비교 / 추천ㅊ

const a = '안녕';
const b = '하세요';

console.log(a + b);

// switch case
const device = '45';

switch(device) {
    case 'iphone' :
        console.log('iphone!');
        break;
    case 'ipad' :
        console.log('ipad!');
        break;
    case 'galaxy note' :
        console.log('note!');
        break;
    default :
        console.log('모르겠네요');
}


function hello(name) {
    console.log(name);
    
    return 'hello ' + name;
}

const result = hello('BABA');
console.log(result);


// 화살표 함수
const add = (a, b) => {
    return a + b;
}
// const add = (a, b) => a + b; // (같은 코드)
const sum = add(1, 2);
console.log(sum);


// 객체
const ironMan = {
    name : '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
};

// 비구조화 할당
const { name } = ironMan;
console.log(name);


// 비구조화 할당 시 이름 바꾸기
const name2 = ironMan.name;
console.log(name2);

function print( {alias, name, actor} ) {
    const text = `${alias}(${name})의 역할을 맡은 배우는 ${actor} 입니다`;

    console.log(text);
    
}
// 다른 버전
// function print(hero) {
//     const { alias, name, actor } = hero;
//     const text = `${alias}(${name})의 역할을 맡은 배우는 ${actor} 입니다`;

//     console.log(text);
    
// }
print(ironMan);


// 객체 안에 함수 넣기
const dog = {
    name : '멍멍이',
    sound: '멍멍!',
    say() {
        console.log(this.sound);
    }
    // 다른 버전
    // say : function say() {
    //     console.log(this.sound);
    // }
    // 객체 내 함수 선언에는 화살표 함수가 사용되지 않음.
    // 화살표 함수 내의 this 가 해당 객체를 가르키지 않음
}

dog.say();


// getter, setter 
// 객체 내 원하는 함수 앞에 get 입력
// get 함수는 return 값이 필요 (호출이 아닌 조회)
const number = {
    a: 1,
    b: 2,
    set setNum(value) {
        console.log(`a의 값이 바뀝니다! : ${value}`);
        this.a = value;
        console.log(`a 와 b의 합은 ${this.a + this.b} 입니다!`);
        
    },
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
}
console.log(number.sum);
number.b = 5;
console.log(number.sum);

number.setNum = 7;
console.log();
// gettter setter 좋은 예시
// set 함수 발동 시에 계산하여 sum 에 저장 => 불러오는 횟수가 적음
// get 함수로 계산하게 되면 get 실행 시 마다 계산하여 연산이 가중됨
const number2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log(`계산 중입니다!`);
        this.sum = this._a + this._b; 
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
}
console.log('getter setter 좋은 예시');
console.log(number2.sum);
number2.a = 5;
console.log(number2.sum);
number2.b = 7;
console.log(number2.sum);


