// Call API 'https://jsonplaceholder.typicode.com/users' và hiển thị danh sách User ra màn hình
// state: trang thai co kieu du lieu bat ki, setState: update state, useState(): khoi tao gia tri mac dinh
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
// import type { IUser } from '@/models/User';
import useFetch from '@/hooks/useFetch';
import type { IUser } from '@/models/User';
import useFetchFn from '@/hooks/useFetchFn';


const StateAndAPI = () => {
    // hook: useState
    // const [users, setUsers] = useState<IUser[]>([])

    // hook: useEffect: load đầu tiên trước khi render components
    // useEffect(() => {
    //     const fetchUsersAPI = async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await res.json();
    //         setUsers(data); // users co du lieu
    //     }
    //     fetchUsersAPI()

    // }, [])

    const { data: users } = useFetchFn<IUser[]>('https://jsonplaceholder.typicode.com/users')

    if (!users) {
        <div>Khong co du lieu User</div>
    }

    return (
        <div className='grid grid-cols-3 gap-5'>
            <h1 className='text-[30px] font-bold'>Danh sach Nguoi dung</h1>
            {
                users?.map(user => (
                    <UserCard user={user} />
                ))
            }
            {/* <h1 className='text-[30px] font-bold'>Chi tiet Nguoi dung</h1>
            {
                <div className='border border-blue-500'>
                    <p>{userObj.id}</p>
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                </div>
            } */}
        </div>
    )
}

export default StateAndAPI

// props
// code smell -> thoi
// tai su dung componets + props, object
