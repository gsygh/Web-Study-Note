// reducer : 상태를 업데이트하는 함수

// 기존 방식 - 상태 업데이트 시 useState 사용
// 이번 강의 - useReducer를 사용해 상태를 업데이트
// useReducer는 액션이라는 객체(업데이트할 때 참조하는 객체)를 기반으로 상태를 업데이트
// 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능 (다른 파일에 작성 후 불러오기도 가능)

// Ex) dispatch({ 
// type: 'INCREMENT',       // 타입 명시
// diff: 4      // 업데이트 시 참조하고 싶은 값
// })

// Ex) 
// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// number(state), dispatch(action 을 발생시킴) = reducer, 기본값(숫자, 객체 등등)
// const [number, dispatch] = useReducer(reducer, 0);

import React, {useReducer} from 'react';

// 상태 변경 로직이 컴포넌트 밖에 존재
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;

        default:
            // return state;
            throw new Error("unhandled action");
            
    }
}

function Counter () {
    const [number, dispatch] = useReducer(reducer, 0);
    
    const increase = () => {
        dispatch({
            type: 'INCREMENT'
        });
    };
    const decrease = () => {
        dispatch({
            type: 'DECREMENT'
        });
    };
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
} export default Counter;