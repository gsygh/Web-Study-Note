import React, { useEffect } from 'react';

// useEffect
// 화면 in, out 시 특정 작업 진행
// props 상태 변경 > 업데이트 시, 업데이트 전 작업 가능
// component mount(나타남),  unmount(삭제)

function UseEffect() {
    // useEffect((), [])
    // [] 은 dependency (연관성 있는 배열, 존재 시 해당 배열의 변경점 발생 시 동작, 없을 시 등장 시에만 작동)
    useEffect(() => {
        console.log('컴포넌트 등장');
        // 할 수 있는 작업
        // props -> state로 설정 
        // Rest API 요청
        // D3, Video.js 같은 라이브러리 사용
        // setInterval, setTimeout

        // unmount 직전 작동할 함수는 return 에 표현
        return () => {
            // 할 수 있는 작업
            // clearInterval, clearTimeOut
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트 화면에서 사라짐');
            
        }
        // , ~ 자체를 없애게 된다면 모즌 컴포넌트에서 useEffect 가 실행
        // 부모 컴포넌트 리랜더링 시 자식 컴포넌트도 리랜더링

    }, []);

    return (
        <div>sd</div>
    );
}
export default UseEffect;