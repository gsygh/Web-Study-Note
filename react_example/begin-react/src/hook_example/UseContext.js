// Context는 컴포넌트가 트리 상 아래에 위치한 모든 곳에 데이터를 제공
// const MyContext = createContext(defulatValue); 로 context 생성
// 사용할 컴포넌트에서 <MyContext.Provider value={...}> 로 사용

// UseRef_store_reducer 에서는 onToggle과 onRemove 컴포넌트를 필요 컴포넌트에 바로 주기 위해 사용



// 주의 사항
// 데이터의 흐름을 직관적으로 보기에는 props가 더 편리함(유지보수)
// 컴포넌트를 추출하고 JSX를 children으로 전달할 수도 있음
// 이 2경우를 먼저 고려한 후 Context를 사용할 것(과도한 사용은 금지)

import React, { createContext, useContext } from 'react';

const MyContext = createContext('기본값');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요 ? {text} </div>
}

function Parent() {
    return <Child></Child>
}

function GrandParent() {
    return <Parent></Parent>
}

function ContextSample() {
    return (
        <MyContext.Provider value = "Good">
            <GrandParent></GrandParent>
        </MyContext.Provider>
    );
}
export default ContextSample;