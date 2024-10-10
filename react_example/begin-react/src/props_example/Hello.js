import React from 'react';

function Hello(props) {
    // 지정한 props를 비구조화 할당으로 받아옴
    const {color, name} = props;
    
    return <div style={{
        color
    }}>{name}</div>;
}

// props가 빠져있을 때 임시로 사용할 default 값
Hello.defaultProps = {
    name: '임시'
}
export default Hello;