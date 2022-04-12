import React from 'react';
import User from './User';



function UserList() {

const users = [
    {
        id: 1,
        group: '당연직',
        name: '왕승혜',
        department: '글로벌법제전략팀'
    },
    {
        id: 2,
        group: '원외',
        name: '우봉관',
        department: '원광대학교'
    },
    {
        id: 3,
        group: '원내',
        name: '박성수',
        department: '법제조사평가팀'
    },
    {
        id: 4,
        group: '당연직',
        name: '윤창호',
        department: '기후변화법제팀'
    }
];



return (
        {users.map(user => (
            <User
                key={user.id}
                id={user.id}
                group={user.group}
                name={user.name}
                department={user.department}
            />
        ))}
    
);
}

export default UserList;