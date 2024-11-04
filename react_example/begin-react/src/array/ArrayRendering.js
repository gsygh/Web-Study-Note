import React from "react";

// React.memo 사용 > React.memo 로 감싸서 const User에 선언
const User = React.memo(function User({user, onRemove, onToggle}) {
    console.log('Users');
    
    return (
        <div>
           <b style={{
            color: user.active ? 'green' : 'black',
            cursor: 'pointer'
            }}
            onClick={() => onToggle(user.id)}
            >{user.username}</b> &nbsp;
           <span>({user.email})</span>
           <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    )
});

function ArrayRendering({users, onRemove, onToggle}) {
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
                    user => (<User user={user} key={user.id}
                        onRemove={onRemove} onToggle={onToggle}
                    />)
                )
                
            }
        </div>
    )
}

export default React.memo(ArrayRendering);