// Object의 내장 함수 - 객체의 속성값 혹은 value 값만을 얻어오는 방법
// Object.keys, values, entries
const attrs = {
    name : '멍멍이',
    sound: '멍멍',
    age: 2
};
// 속성값
console.log(Object.keys(attrs));
// value값
console.log(Object.values(attrs));
// attr과 value 값을 하나씩 묶어 배열 형태로 반환
console.log(Object.entries(attrs));
console.log(attrs);


// forEach
const str = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

str.forEach(function print(strs) {
    console.log(strs);
});
str.forEach((strs) => {
    console.log(strs);
});


// map(배열의 모든 원소를 변환)
const map_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach Ver.
// const array_squared = [];
// map_array.forEach(n => {
//     array_squared.push(n * n);
// });

// map Ver.
// array_squared 함수는 n을 파라메타로 받아와서 n * n을 반환하는 함수
const array_square = n => n * n
const array_squared = map_array.map(array_square);

console.log(array_squared);


// map을 이용하여 객체에서 text만 찾아내는 코드
const mapItems = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const mapText = mapItems.map(item => item.text);
console.log(mapText);



// indexOf = 값을 이용하여 인덱스를 찾는 함수(첫 번째)
const indexOfStrs = ['a', 'b', 'c', 'd', 'e'];
const index = indexOfStrs.indexOf('d');
console.log(index);


// findIndex = 특정 조건을 확인하여 일치하면 몇 번째 원소인지 알려주는 함수(첫 번째)
// find = 인덱스가 아닌 객체를 반환(첫 번째)
const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const todoIndex = todos.findIndex(todo => todo.text === '배열 내장함수 배우기');
const todoObject = todos.find(todo => todo.text === '배열 내장함수 배우기');
console.log(todoIndex);
console.log(todoObject);


// filter : 특정 조건 만족하는 월소를 찾아 새로운 배열을 만드는 것
// 위 todos 활용
const tasksNotDone = todos.filter(todo => todo.done === true);
console.log(tasksNotDone);


// splice (원하는 인덱스부터 n개 만큼 삭제 후 삭제된 값 반환)
const spliceNumber = [10, 20, 30, 40, 50];
const spliceIndex = spliceNumber.indexOf(30);
const spliced = spliceNumber.splice(spliceIndex, 1);
console.log(spliceNumber);
console.log(spliced);


// slice (시작 인덱스부터 마지막 인덱스 전까지 잘라냄(기존 배열은 그대로))
const sliceNumber = [10, 20, 30, 40, 50, 60, 70, 80];
const sliced = sliceNumber.slice(2, 5);
console.log(sliced);



// Shift (인덱스 0번의 값을 뺌(기존 배열 수정))
const shiftNumber = [10, 20, 30, 40];

console.log(shiftNumber.shift());
console.log(shiftNumber.shift());
console.log(shiftNumber.shift());
console.log(shiftNumber.shift());
console.log(shiftNumber);

// pop (인덱스 마지막 번호의 값을 뺌(기존 배열 수정))
const popNumber = [10, 20, 30, 40];

console.log(popNumber.pop());
console.log(popNumber.pop());
console.log(popNumber.pop());
console.log(popNumber.pop());
console.log(popNumber);

// unshift(배열의 0번에 삽입(기존 배열 수정))
const unshiftNumber = [10, 20, 30, 40];

console.log(unshiftNumber.unshift(3));
console.log(unshiftNumber);

// push(배열의 마지막 번호에 값을 삽입(기존 배열 수정))
const pushNumber = [10, 20, 30, 40];

console.log(pushNumber.push(3));
console.log(pushNumber);

// concat (다수의 배열을 하나의 배열로 합침)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);
console.log(concated);

// join (리스트로 되어 있는 배열을 설정한 seperator로 구분하여
// 문자열 형태로 반환)
const joinArr = [1, 2, 3];
console.log(joinArr.join());
console.log(joinArr.join(', , '));


// reduce (배열의 모든 값으로 특정한 연산을 할 때 사용)
// reduce((누적 값, 현재 값) => 누적값 + 현재값, 초기값)
// reduce((누적 값, 현재 값, index, 함수를 실행하는 자기 자신(배열)) => {내용}, 초기값)
const reduceNumbers = [1, 2, 3, 4, 5];

const sum = reduceNumbers.reduce((accumulator, current) => accumulator + current, 0);
const average = reduceNumbers.reduce((accumulator, current, index, array) => {
    if(index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);

console.log(sum);
console.log(average);

// reduce 예제
// 각 알파벳 갯수 확인 후 객체에 삽입
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if(acc[current]) {
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;

}, {});

console.log(counts);



// Quiz
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수
function countBiggerThanTen(numbers) {
    // forEach
    let _count = 0;
    numbers.forEach(number => {
        if(number > 10) _count += 1;
    })
    return _count;

    // filter
    // return numbers.filter(number => number > 10).length;

    // reduce
    // return numbers.reduce((acc, current) => {
    //     console.log(acc);
        
    //     if(current > 10) {
    //         return acc + 1;
    //     }
    //     else {
    //         return acc;
    //     }
    // }, 0);
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);
