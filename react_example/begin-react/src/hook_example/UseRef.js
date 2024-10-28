import React, { useState, useRef } from "react";

// 함수 형 react에서는 useref hook을 사용
// 클래스 형 react에서는 React.createRef() 또는 callback을 사용
function UseRef(params) {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    // 비구조화 할당
    const { name, nickname } = inputs;
    const onChange = (e) => {
        const { name, value } = e.target;
        // react 에서 객체를 업데이트 할 떄는 기존의 객체를 복사해야 함
        const nextInputs = {
            ...inputs,
            [name]: value,
        }

        setInputs(nextInputs);

    };

    const onReset = () => {
        const nextInputs = {
            name: '',
            nickname: ''
        }
        setInputs(nextInputs);
        // current = useRef 의 라이브러리 .focus는 DOM API
        nameInput.current.focus();
    };

    return (
        <div>
            {/* Reset 시 첫 번째 Input에 자동 focusing*/}
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화!</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}
export default UseRef;