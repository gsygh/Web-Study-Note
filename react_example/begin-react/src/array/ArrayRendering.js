import React from "react";

function User({user}) {
    return (
        <div>
           <b>{user.username}</b>
           <span>({user.email})</span>
        </div>
    )
}

function ArrayRendering({users}) {
    
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {
                users.map(
                    // db의 Primary Key를 생각할 것
                    // index를 key로 사용하는 것은 비효율적
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default ArrayRendering;