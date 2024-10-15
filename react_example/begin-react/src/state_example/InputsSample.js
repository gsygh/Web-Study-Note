import React, { useState } from "react";

function InputsSample(params) {
    const onChange = (e) => {

    };

    const onReset = () => {

    };

    return (
        <div>
            <input />
            <button onClick={onReset}>초기화!</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
} 
export default InputsSample;