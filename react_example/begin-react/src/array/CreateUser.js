import React, {forwardRef} from 'react';

function CreateUser({username, email, onChange, onCreate, ref}) {
    console.log('Create');
    

    return (
        <div>
            <input name = "username" placeholder="계정 이름" 
                onChange={onChange} value={username} type="text" 
                // ref={ref}
            />
            <input name = "email" placeholder="이메일" 
                onChange={onChange} value={email} type="text" 
            />
            <button onClick={onCreate}>등록</button>

        </div>
    )
}
export default React.memo(CreateUser);