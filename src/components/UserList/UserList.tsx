import React from 'react'
import { IUser } from '../../types/types';

interface IProps {
    users: IUser[]
}

const UserList:React.FC<IProps> = ({users}) => {
    
    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <strong>{user.name}</strong> живет в {user.address.city} на улице {user.address.street} имеет {user.address.zipcode}
                </div>
            ))}
        </div>
    )
}
export default UserList;