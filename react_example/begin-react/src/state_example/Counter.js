import React, {useState} from "react";

function Counter () {
    // [현재 상태, 현재 상태를 변경하는 함수] = 해당 배열 반환
    const [number, setNumber] = useState(0);
    
    const increase = () => {
        setNumber(number => number + 1);
    };
    const decrease = () => {
        setNumber(number => number -1);
    };
    return (
        <div>
            <h3>{number}</h3>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
} export default Counter;