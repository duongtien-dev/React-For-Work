import React from 'react';
import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import type { IUser } from '@/models/User';
import useFetch from '@/hooks/useFetch';

const StateUser = () => {
    // 3 nhiệm vụ
    // const [listUsers, setListUsers] = useState<IUser[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await res.json();
    //         setListUsers(data);
    //     };

    //     fetchData();
    // }, []);


    // hooks
    const { data: listUsers } = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users')

    if(!listUsers) {
        return null
    }
    // 10 -> 1

    return (
        <div>
            {/* Container danh sách */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {listUsers.map(user => (
                    // tách components
                    <UserCard user={user} />
                ))}
            </div>
        </div>
    );
};

export default StateUser;

// 1. tái sử dụng components
// 2. tái sử dụng object - interface
// 3. hook: custom function, tái sử dụng nhiều lần
