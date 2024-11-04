import React, { useRef, useState, useMemo, useCallback } from 'react';
import ArrayRendering from './ArrayRendering';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    
    return users.filter(user => user.active).length;
    
}

// 기존의 state와 같은 값이 변경되면 Rerendering 발생 후 일반 값 초기화
// Rerendering 을 막고 싶다면 UseRef 사용 (UseRef 값은 Rendering 시에도 초기화 X)
// 여기서의 UseRef 는 nextId 값을 관리할 때 사용
// (setTimeOut, setInterval의 id, 외부 라이브러리를 사용해 생성된 인스턴스의 scroll위치 등)
function UseRefStore() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
    });
    const { username, email } = inputs;

    // useCallback 을 사용한 onChange는 deps 값인 inputs의 상태가 변경될 때만 함수가 만들어지고 
    // 그 외에는 기존 함수 재사용 (불필요한 재랜더링 방지)
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }, [inputs]);

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'jiseok',
            email: 'gsygh@naver.com',
            active: true
        },
        {
            id: 2,
            username: 'test1',
            email: 'test1@naver.com',
            active: false
        },
        {
            id: 3,
            username: 'test2',
            email: 'test2@naver.com',
            active: false
        }
    ]);
    const { users_id, users_username, users_email } = users;

    const nextId = useRef(4);

    // const usernameInput = useRef();

    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email
        }

        setUsers(
            // 방법 1.
            // [...users,
            //     user]

            // 방법 2.
            // users.concat(user)
            
            // 리랜더링 방지를 위한 함수형 업데이트 사용(React.memo 확인)
            users => users.concat(user)
        );
        // usernameInput.current.focus();

        setInputs({
            username: '',
            email: '',
        });
        nextId.current += 1;
    }, [username, email]); // username, email => 비구조화 할당을 하였기에 선언

    // ArrayRendering 의 onRemove(user.id) => e = user.id
    const onRemove = useCallback((e) => {
        setUsers(users => users.filter(user => user.id !== e));
        
        console.log(users);
    }, []);

    const onToggle = useCallback((id) => {
        // 리랜더링 방지를 위한 함수형 업데이트 사용(React.memo 확인)
        setUsers(users => users.map(
            user => user.id === id
                ? {...user, active: !user.active} : user
                
        ));
    }, []);
    
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div>
            <ArrayRendering users={users} onRemove={onRemove} onToggle={onToggle} 
            countActiveUsers={countActiveUsers}
            />
            <CreateUser username={username} email={email}
                onChange={onChange} onCreate={onCreate}
            // ref={usernameInput}
            />
            <div>
                활성 사용자 수 : {count}
            </div>
        </div>
    );
}
export default UseRefStore;