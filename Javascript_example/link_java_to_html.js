// DOM : 각 태그의 정보를 가지고 있는 JS 객체
const number = document.getElementById('number');
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');
const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;


// 객체의 text값
console.log(number.innerText);
// top 위치
console.log(increase.offsetTop);
// id 조회
console.log(decrease.id);

increase.onclick = () => {
    // parseInt(문자열을 숫자로, 진수)
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}
decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}


// modal 예제
const open = document.getElementById('modal-open');
const close = document.getElementById('modal-close');
const modal = document.querySelector('.modal-wrapper');
console.log(modal);

open.onclick = () => {
        modal.style.display = 'flex';
}
close.onclick = () => {
    modal.style.display = 'none';
}