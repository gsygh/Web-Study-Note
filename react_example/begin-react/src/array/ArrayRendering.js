import React, { useContext } from "react";
import { UserDispatch } from '../array/UseRef_store_reducer';

// React.memo 사용 > React.memo 로 감싸서 const User에 선언
const User = React.memo(function User({user}) {
    console.log('Users');
    const { id } = user;
    const dispatch = useContext(UserDispatch);
    
    return (
        <div>
           <b style={{
            color: user.active ? 'green' : 'black',
            cursor: 'pointer'
            }}
            onClick={() => dispatch({
                type: 'TOGGLE_USER',
                id
            })}
            >{user.username}</b> &nbsp;
           <span>({user.email})</span>
           <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
           })}>삭제</button>
        </div>
    )
});

function ArrayRendering({users}) {
    console.log('ArrayRendering');
    
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {
                users.map(
                    // db의 Primary Key를 생각할 것
                    // index를 key로 사용하는 것은 비효율적
                    user => (<User user={user} 
                        key={user.id}
                    />)
                )
                
            }
        </div>
    )
}

export default React.memo(ArrayRendering);