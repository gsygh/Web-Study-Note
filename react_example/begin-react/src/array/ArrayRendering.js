import React from "react";

function User({user, onRemove, onToggle}) {
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
}

function ArrayRendering({users, onRemove, onToggle}) {
    
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

export default ArrayRendering;