import React, {Component, useState} from "react";

// functional Component
// function Counter () {
//     // [현재 상태, 현재 상태를 변경하는 함수] = 해당 배열 반환
//     const [number, setNumber] = useState(0);
    
//     const increase = () => {
//         setNumber(number => number + 1);
//     };
//     const decrease = () => {
//         setNumber(number => number -1);
//     };
//     return (
//         <div>
//             <h3>{number}</h3>
//             <button onClick={increase}>+1</button>
//             <button onClick={decrease}>-1</button>
//         </div>
//     );
// } export default Counter;

// classial Component
class Counter extends Component {
    constructor(props) {
        super(props);
        // button onclick에 this.handle.. 을 연결하면 handle 함수 내부에서 this 를 실행하면
        // 함수와 this와의 연결이 사라짐
        // 그래서 constructor내 .bind를 사용해 연결을 설정해줌 (첫 번째 방법)
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        
        // class 형 컴포넌트의 경우 State 값은 반드시 객체 형태
        this.state = {
            counter: 0
        };

    }

    // 두 번째 방법(함수 선언 시 화살표 함수로 선언)
    // handleIncrease = () => { ... }
    handleIncrease() {
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        // 함수형 업데이트
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }
    handleDecrease() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    }
}
export default Counter;