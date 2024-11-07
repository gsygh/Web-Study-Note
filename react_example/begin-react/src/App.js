import './App.css';
import React, { useRef, useState } from 'react';
import UseRef from './hook_example/UseRef';
import ConditionalRendering from './props_example/ConditionalRendering';
import Hello from './props_example/Hello';
import PropsChildren from './props_example/PropsChildren';
import Counter from './state_example/Counter';
import InputSample from './state_example/InputSample';
import InputsSample from './state_example/InputsSample';
import ArrayRendering from './array/ArrayRendering';
import CreateUser from './array/CreateUser';
import UseRefStore from './array/UseRef_store';
import UseReducer from './hook_example/UseReducer';
import UseRef_store_reducer from './array/UseRef_store_reducer';

function App() {
  // const [inputs, setInputs] = useState({
  //   username: '',
  //   email: '',
  // });
  // const { username, email } = inputs;
  // const onChange = e => {
  //   console.log(e);
  //   const { name, email } = e.target;
  //   setInputs({
  //     ...inputs,
  //     // name = username => username : value 적용
  //     // name = email => eamil : value 적용
  //     [name]: value,

  //   });
  // }

  const style = {
    backgroundColor: 'black',
    width: 30,
    height: 20,
    color: 'aqua',
    fontSize: 30,
    margin: 24,
  };
  const counterStyle = {
    marginLeft: 50,
    marginTop: 50
  };
  const inputSampleStyle = {
    marginTop: 50
  }

  const users = [
    {
      id: 1,
      username: 'jiseok',
      email: 'gsygh@naver.com'
    },
    {
      id: 2,
      username: 'test1',
      email: 'test1@naver.com'
    },
    {
      id: 3,
      username: 'test2',
      email: 'test2@naver.com'
    }
  ]

  return (
    <div>
      <PropsChildren>
        {/* isSpecial = true */}
        <ConditionalRendering value='조건부 렌더링 입니다.' isSpecial></ConditionalRendering>
        <Hello name='안녕하세요' color='red'></Hello>
        <Hello color='pink'></Hello>
        <div className='gray-box'></div>
        <div style={style}>asas</div>
      </PropsChildren>
      <div style={counterStyle}>
        <Counter></Counter>
        <InputSample></InputSample>
        <InputsSample></InputsSample>
      </div>
      <div style={counterStyle}>
        <UseRef></UseRef>
      </div>
      <div style={counterStyle}>
        {/* <ArrayRendering></ArrayRendering> */}
      </div>
      <div style={counterStyle}>
        {/* <CreateUser></CreateUser> */}
      </div>
      <div style={counterStyle}>
        <UseRefStore></UseRefStore>
      </div>

      {/* useReduce */}
      <div style={counterStyle}>
        <UseReducer></UseReducer>
        <UseRef_store_reducer></UseRef_store_reducer>
      </div>

    </div>
  );
}

export default App;
