// class Slime {
//     constructor() {
//         this.name = '슬라임';
//     }
// }

// class CuteSlime extends Slime {
//     constructor() {
//         super();
//         this.attribute = 'cute';
//     }
// }

// class PurpleCuteSlime extends Slime {
//     constructor() {
//         super();
//         this.attribute = 'cute';
//         this.color = 'purple';
//     }
// }


// const slime = new Slime();
// console.log(slime);
// const cute_slime = new CuteSlime();
// console.log(cute_slime);
// const purple_cute_slime = new PurpleCuteSlime();
// console.log(purple_cute_slime);


// spread(객체 혹은 배열 펼치기(항목 추가 시 유용))
const slime = {
    name: '슬라임'
};
const cuteSlime = {
    ...slime,
    attribute: 'cute'
};
const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

const animals = ['개', '고양이', '참새'];
const another_animals = [...animals, '고라니'];
console.log(animals);
console.log(another_animals);


// rest(객체, 배열, 함수의 파라미터에서 사용, 이름 변경 가능)
// 선택한 속성을 제외하면 속성을 가져옴
// rest는 마지막에 와야 함, 앞에 사용 금지
const restTest = {
    value: 1,
    name: '일'
};

const { value, ...rest } = restTest;
console.log(value);
console.log(rest);

// 함수 파라미터(함수에서 받아오는 값)에서의 rest
function sum(...numbers) {
    return numbers.reduce((acc, current) => {
        return acc + current;
    }, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum([1, 2, 3, 4, 5])); // 01, 2, 3, 4, 5

// 함수 인자(함수 호출 시 넣어주는 값)에서의 spread
function sum2(...numbers) {
    return numbers.reduce((acc, current) => {
        return acc + current;
    }, 0);

}

const numbers2 = [1, 2, 3, 4, 5, 6, 7];
console.log(sum2(...numbers2));

// 퀴즈
function max(...numbers) {
    let result = numbers.reduce((preValue, current) => {
        if(preValue) {
            (preValue < current) ? preValue = current : preValue;
            return preValue;
        }
        else {
            preValue = current;
            return preValue;
        }
    }, 0);
    return result;
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);


// scope
// global, function, block(if, for과 같은 블록 내에서 사용)
// let, const 는 블록이 잘 작동하나, var는 덮어쓸 위험이 존재.

// hoisting(아직 선언되지 않은 함수나 변수를 끌어올려서 사용)
// js 설계 상 가능은 하나 되도록이면 사용하지 말고 선언 후 사용으로 쓸 것
myFunction();

function myFunction() {
    console.log('hello world');
    
}