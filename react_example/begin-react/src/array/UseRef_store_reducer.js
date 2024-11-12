import React, { useRef, useReducer, useMemo, useCallback, createContext } from 'react';
import ArrayRendering from './ArrayRendering';
import CreateUser from './CreateUser';
import useInputs from '../hook_example/CustomHook';

// 이 코드에서는 기존의 UseRef_store의 state를 useReducer를 사용해 관리

function countActiveUsers(users) {
    console.log('활성 사용자 수를 세는 중...');

    return users.filter(user => user.active).length;
}

function reducer(state, action) {

    switch (action.type) {
        // change_input Case는 커스텀 Hook에서 관리
        // case 'CHANGE_INPUT':
        //     return {
        //         ...state,
        //         inputs: {
        //             ...state.inputs,
        //             [action.name]: action.value
        //         }
        //     }
        case 'CREATE_USER':
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user => user.id === action.id
                    ? {
                        ...user,
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
    // inputs 는 커스텀 훅에서 관리
    // inputs: {
    //     username: '',
    //     email: '',
    // },
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

// Context 생성
export const UserDispatch = createContext(null);


function UseRefStoreReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const [form, onChange, reset] = useInputs({
        username: '',
        email: '',
    });
    const { username, email } = form;

    const nextId = useRef(4);
    const { users } = state;



    const onCreate = useCallback(e => {
        // username, eamil 은 커스텀 훅에서 관리
        // const {name, value} = e.target;
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        nextId.current += 1;
        reset();
    }, [username, email, reset]);

    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        // context 사용, dispatch를 통해 조작
        <UserDispatch.Provider value = {dispatch}>
            <div>
                <ArrayRendering
                    users={users}
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
        </UserDispatch.Provider>
    );
}
export default UseRefStoreReducer;