import React from "react";

// props로 children(Hello Component)를 받아와서 랜더링
function PropsChildren({ children }) {
    const style = {
        border: '2px solid red',
        padding: 16,
        height: 30
    };

    return <div style={style}>{ children }</div>
}

export default PropsChildren;