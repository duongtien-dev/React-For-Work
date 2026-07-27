import type { IUser } from '@/models/User';

interface UserCardProps {
    user: IUser;
}

// {}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className='border border-red-500'>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {/* 20 thuoc tinh + UI hoi kho -> 61 -> 300 dong*/}
        </div>
    )
}

export default UserCard



// src
// tsx: react component + typescript
// ts: typescript
