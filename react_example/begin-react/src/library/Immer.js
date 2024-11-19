// React에서 배열이나 객체의 값을 직접 수정하는 것은 불변성 법칙에 어긋남
// spread(...object)와 같이 처리하는 것이 불변성 법칙을 지킬 수 있음
// 객체에 직접 push나 splice와 같은 내장 함수를 사용하는 것 또한 불변성 법칙에 어긋남

// 객체나 배열이 복잡해지면 불변성을 지키기 어려워짐
// Immer 를 사용하면 불변성을 해치는 코드를 작성해도 대신 유지해줌

// 해당 코드는 UseRef_store_reducer에 존재
// reducer UseRef_store에서의 CREATEUSER과 REMOVEUSER는 깔끔하기에 굳이 건드릴 필요 없음

// 만약 produce(draft => {}) 와 같은 방식으로 사용하게 되면 produce는 업데이트 함수로 동작
// const updater = produce(draft...)로 선언하여 setState(updater); 로 사용 가능

// immer는 기존 불변성을 지키는 방식보다 performance가 좋지 않음.
// 큰 차이는 없으나, 데이터가 복잡할 때는 사용하는 것을 권장.
// 데이터 구조를 잘 짜는 것이 먼저이고 어쩔 수 없을 때 사용하는 것이 웹 성능에 도움이 될 것으로 보임

// 예시 코드
import produce from 'immer';

const state = {
    number: 1,
    dontChangeMe: 2
};

// produce(base, recipe, patchListener)
// base : 기존 상태, recipe: 상태를 변경할 함수, 
const nextState = produce(state, draft => {
    draft.number += 1;
});


// 예시 코드 2
const array = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'my'
    },
    {
        id: 3,
        text: 'name'
    }
];

const nextArray = produce(array, draft => {
    draft.push({
        id: 4,
        text: 'Jiseok'
    });
    draft[0].text = draft[0].text + ' world';
})