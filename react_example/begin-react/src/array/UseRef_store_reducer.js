import React, { useRef, useReducer, useMemo, useCallback } from 'react';
import ArrayRendering from './ArrayRendering';
import CreateUser from './CreateUser';

// 이 코드에서는 기존의 UseRef_store의 state를 useReducer를 사용해 관리

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');
    
    return users.filter(user => user.active).length;
}

function reducer(state, action) {
    
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'CREATE_USER' :
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user => user.id === action.id 
                    ? {...user, 
                        active: !user.active
                    }
                    : user
                )
            }
            case 'REMOVE_USER': 
            return {
                ...state, 
                users: state.users.filter(
                    user => user.id !== action.id
                )
            }
    
        default:
            throw new Error("unhandled action");
            
    }
}

const initialState = {
    inputs: {
        username: '',
        email: '',
    },
    users: [{
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
    }]
};

// 기존의 state와 같은 값이 변경되면 Rerendering 발생 후 일반 값 초기화
// Rerendering 을 막고 싶다면 UseRef 사용 (UseRef 값은 Rendering 시에도 초기화 X)
// 여기서의 UseRef 는 nextId 값을 관리할 때 사용
// (setTimeOut, setInterval의 id, 외부 라이브러리를 사용해 생성된 인스턴스의 scroll위치 등)
function UseRefStoreReducer() {
    // useCallback 을 사용한 onChange는 deps 값인 inputs의 상태가 변경될 때만 함수가 만들어지고 
    // 그 외에는 기존 함수 재사용 (불필요한 재랜더링 방지)
    // 리랜더링 방지를 위한 함수형 업데이트 사용(React.memo 확인)
    // username, email => 비구조화 할당을 하였기에 선언

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const { users } = state;
    const { username, email } = state.inputs;
    
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CHANGE_INPUT',
            name, value
        })
    }, []);

    const onCreate = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        })
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    }, []);
    const count = useMemo(() => countActiveUsers(users), [users]);
    
    return (
        <div>
            <ArrayRendering 
                users={users}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            <CreateUser 
                username={username} 
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <div>
                활성 사용자 수 : {count}
            </div>
        </div>
    );
}
export default UseRefStoreReducer;