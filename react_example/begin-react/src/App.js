import './App.css';
import UseRef from './hook_example/UseRef';
import ConditionalRendering from './props_example/ConditionalRendering';
import Hello from './props_example/Hello';
import PropsChildren from './props_example/PropsChildren';
import Counter from './state_example/Counter';
import InputSample from './state_example/InputSample';
import InputsSample from './state_example/InputsSample';
import ArrayRendering from './array/ArrayRendering';

function App() {
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
        <ArrayRendering></ArrayRendering>
      </div>
    </div>
  );
}

export default App;
