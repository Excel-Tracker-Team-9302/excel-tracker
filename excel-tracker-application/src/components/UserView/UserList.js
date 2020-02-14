import React from 'react';
import UserCard from './UserCard';

const UserList = ({users, prop}) => {
    return(
        <div>
            {
            users.map((user, i) => {
                return(
                    <UserCard 
                        name={users[i].name} 
                        userType={users[i].role}
                        email={users[i].email}
                        prop = {prop}
                    />
                ); 
            })
            }
        </div>
    );
}

export default UserList;