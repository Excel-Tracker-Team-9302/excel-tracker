import React from 'react';
import UserCard from './UserCard';

const UserList = ({users}) => {
    return(
        <div>
            {
            users.map((user, i) => {
                return(
                    <UserCard 
                        name={users[i].name} 
                        userType={users[i].role}
                    />
                ); 
            })
            }
        </div>
    );
}

export default UserList;