import React from "react";

function User({user}) {
    return (
        <div>
           <b>{user.username}</b>
           <span>({user.email})</span>
        </div>
    )
}

function ArrayRendering(params) {
    const users = [
        {
            id: 1,
            username: 'jiseok',
            email: 'gsygh@naver.com'
        },
        {
            id: 2,
            username: 'test1',
            email: 'test1@naver.com'
        },
        {
            id: 3,
            username: 'test2',
            email: 'test2@naver.com'
        }
    ]

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