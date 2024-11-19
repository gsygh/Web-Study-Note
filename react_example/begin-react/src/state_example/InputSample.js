import React, { useState } from 'react';

function InputSample() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue((value) => e.target.value);
  };
  const onClick = () => {
    setValue((value) => '');
  };

  return (
    <div>
      {/* input 내 value = {value} => 버튼 클릭 시 input 값 초기화 */}
      <input type="text" onChange={onChange} value={value} />
      <button onClick={onClick}>초기화</button>
      <div>
        <b>값: </b>
        {value}
      </div>
    </div>
  );
}
export default InputSample;
