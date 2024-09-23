// 배열
let array = [1, 2, 3, 4, 5];

array.push(3);
console.log(array.length);
console.log(array);

// 반복문
let names = ['아', '에', '이'];
// for
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// while
let i = 0;

while (i < names.length) {
    console.log(names[i]);
    i++;
    if (i === names.length - 1) {
        console.log(`마지막 출력입니다!`);
    }
}
// for of (인덱스가 아닌 객체의 값으로 반복문을 돌림)
for (let i of names) {
    console.log(i);
}
// for in (인덱스가 아닌 객체의 key 값으로 반복문을 돌림)
const forIn = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
}
for (let key in forIn) {
    console.log(`${key} : ${forIn[key]}`);
}
// continue, break
for (let i = 1; i < 10; i++) {
    if (i === 5) continue;
    if (i === 8) break;
    console.log(i);
}

// loop 예제
function sumOf(numbers) {
    let sum_result = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum_result += numbers[i];
    }
    return sum_result;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(`결과 값은 ${result} 입니다!`);

// loop 예제2
function biggerThanThree(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));


