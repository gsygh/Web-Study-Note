import React, { forwardRef, useRef, useContext } from 'react';
import useInputs from '../hook_example/CustomHook';
import { UserDispatch } from './UseRef_store_reducer';

export function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');

    return users.filter(user => user.active).length;
}

function CreateUser() {

    // 과제(UseContext)
    const [form, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const { username, email } = form;

    let nextId = useRef(4);

    // UseRef_store_reducer의 dispatch context를 사용 (바로 dispatch 하도록)
    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current ++;
    }




    return (
        <div>
            <input name="username" placeholder="계정 이름"
                onChange={onChange} value={username} type="text"
            // ref={ref}
            />
            <input name="email" placeholder="이메일"
                onChange={onChange} value={email} type="text"
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default React.memo(CreateUser);