// 조건문?true일 때 실행 : false일 때 실행
const array = [];
let text = array.length === 0 
    ? '배열이 비어있습니다.' 
    : '배열이 비어있지 않습니다.';
console.log(text);


// falsy(false와 비슷한 값, '!' 했을 때 true)
console.log(`${!undefined} , ${!null} , ${!0} , ${!NaN} , ${!false}`);
// truthy '!'했을 때 false
console.log(`${!3} , ${!'hello'}`);



// 단축 평가 논리 계산법
// &&
// 앞과 뒤가 truthy 라면 연산자 뒤에 있는 값을 출력
// 앞이 falsy라면 상관없이 false 출력
console.log('hello' && true);
console.log(true && 'hello');
console.log(false && 'hello');
// ||
// 둘 중 하나라도 truthy 하면 truthy한 값을 출력(앞 우선)
console.log(false || 'hello');
console.log('hello' || false);

// 이를 활용한 예제(조건문처럼 사용 가능)
const object = {name : 'asdf'};

const name = object && object.name;
console.log(name);

const name2 = object ? object.name : null;
console.log(name2);


// 함수의 기본 파라메타
// Math.PI * r * r => return Math.PI * r * r;
const calculateCircleArea = (r = 1) => Math.PI * r * r;
const area = calculateCircleArea();
console.log(area);



// 조건문 간단하게 사용
// function isAnimal(text) {
//     return (
//         text === '개' || text === '고양이' || text === '거북이'
//     );
// }

// console.log(isAnimal('개'));

// 같은 코드
// function isAnimal(text) {
//     const Animals = ['개', '고양이', '거북이'];
//     return Animals.includes(text);
// }
const isAnimal = text => ['개', '고양이', '거북이'].includes(text);

console.log(isAnimal('개'));

// 예제2
function getSound(animal) {
    const sound = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구구구'
    };
    return sound[animal] || '지정되지 않은 동물입니다.';
}

console.log(getSound('개'));
console.log(getSound('안냥'));

// 예제2 다른 Ver.
function getSound2(animal) {
    const tasks = {
        개 : () => {
            console.log('멍멍!');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기() {
            console.log('구구 구 구');
        }
    }

    const task = task[animal];
    if(!task) {
        console.log('지정되지 않은 동물입니다.');
        return;
    }
    task();
}


// 비구조화 할당 : 배열이나 객체의 속성을 해체, 그 값을 개별 변수에 담을 수 있게 하는 js표현식
// 예제 1
const object2 = { a: 1, b: 2 };
const {a , b} = object2;
console.log(b);

// 예제 2 (기본 값 지정)
let ex = {};
function ex2 ({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}
ex2(ex);

// 예제 3(비구조화 할당 꺼내는 법)
let animal = {
    name: '멍멍이',
    type: '개'
};

// animal 객체의 name 을 nickname으로 빼기
const {name: nickname} = animal;
console.log(nickname);

// 배열 비구조화 할당
let array2 = [1];

let [one, two = 3] = array2;

console.log(one);
console.log(two);

// 배열의 deep한 위치에 있는 값 꺼내기
let deepObject = {
    state: { 
        information: {
            name3: 'velopert',
            languages: ['korean', 'english', 'chiness']
        }
    },
    value: 5
};

const {
    name3,
    languages
} = deepObject.state.information;

// deepObject 내의 value 값 받아옴
let {value} = deepObject;
// deepObject 내의 value 값을 value2로 받아옴
let {value: value2} = deepObject;
console.log(value2);

const extracted = {
    name,
    languages,
    value
};

console.log(extracted);


