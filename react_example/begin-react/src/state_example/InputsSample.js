import React, { useState } from "react";

function InputsSample(params) {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    // 비구조화 할당
    const { name, nickname } = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
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
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화!</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
} 
export default InputsSample;