
// // work 함수가 끝나고 다음 작업을 실행하고 싶다면 callback 함수 사용
// function work(callback) {
//     // setTimeout(함수, timeout(지정된 시간 후 특정 작업 진행(최소 4ms)))
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) {

//         }
//         const end = Date.now();
//         console.log(end - start + 'ms');
//         callback(end-start);
//     }, 0);

// }

// console.log('작업 실행!');
// work((ms) => {
//     console.log('작업 완료!');
//     console.log(`소요 시간 : ${ms}ms`);
// });
// console.log('다음 작업');

// // callback 복잡 예제
// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if(callback) {
//             callback(increased);
//         }
//     }, 1000);
// }

// increaseAndPrint(0, n => {
//     increaseAndPrint(n, n => {
//         increaseAndPrint(n, n => {
//             increaseAndPrint(n, n => {
//                 increaseAndPrint(n, n=> {
//                     console.log('작업 끝!');
//                 });
//             });
//         });
//     });
// });


// promise
// callback의 과도한 사용은 코드의 복잡성 증가
// promise는 비교적 간단하게 사용할 수 있도록 js에 내장된 기능
// Promise((성공했을 때, 실패했을 때) => { ...구현 }
// resolve : 성공했을 때 해당 값을 반환
// reject : 실패했을 때 해당 Error를 출력
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('result');
//         reject(new Error());
//     }, 1000);
// });

// myPromise.then(result => { // promise 실행 후(then)
//     console.log(result);
// }).catch(e => {
//     console.error(e);
// })

// // promise 만드는 함수
// function increaseAndPrint(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if(value === 5) {
//                 const error = new Error();
//                 error.name = 'ValueIsFiveError';
//                 reject(error);
//                 return;
//             }
//             console.log(value);
//             resolve(value);
            
//         }, 1000);
//     });
// }

// increaseAndPrint(0).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).then(n => {
//     return increaseAndPrint(n);
// }).catch(e => {
//     console.error(e);
    
// });
// // 같은 코드(위 아래 모두 에러 위치 잡기가 힘들며, 분기를 나누기 어려움)
// increaseAndPrint(0).then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .then(increaseAndPrint)
// .catch(e => {
//     console.error(e);
// });


// async, await
// Promise 의 문제점을 보완
// 함수 앞 async, Promise 함수 앞 await
// 오류는 Try catch
// // 예제
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function makeError() {
//     await sleep(1000);
//     throw new Error("one error");
// }

// async function process() {
//     console.log('안녕하세요');
//     await sleep(1000);
//     console.log('반갑습니다');
    

//     try {
//         await makeError();
//     } catch (e) {
//         console.error(e);
//         return 0;
//     }
// }

// process().then(value => {
//     console.log(value);
    
// })

// Promise.all ( 각 promise를 동시에 시작하여 끝난 결과값을 배열로 반환)
// all로 시작한 모든 promise 중 하나라도 error 발생하면 error
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
}
const getRabbit = async () => {
    await sleep(500);
    return '토끼';
}
const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    // const result = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    // 비구조화 할당을 이용한 각 변수 지정
    try {
        const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
        console.log(`${dog}, ${rabbit}, ${turtle}`);
    } catch (error) {
        
    }
}
process();

// // Promise.race ( 각 async를 동시에 시작하여 가장 빠르게 끝난 결과값 하나만 반환)
// //가장 빠르게 끝난 값만 error가 발생하지 않으면 정상 작동
// function sleep(ms) {
//     return new Promise(resolve => {
//         setTimeout(resolve, ms);
//     });
// }

// const getDog = async () => {
//     await sleep(1000);
//     return '멍멍이';
// }
// const getRabbit = async () => {
//     await sleep(500);
//     return '토끼';
// }
// const getTurtle = async () => {
//     await sleep(3000);
//     return '거북이';
// }

// async function process() {
//     const first_result = await Promise.race([getDog(), getRabbit(), getTurtle()]);
//     console.log(first_result);
// }
// process();