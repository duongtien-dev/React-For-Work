import React, { useEffect, useState } from 'react'

// Call API 'https://jsonplaceholder.typicode.com/users' và hiển thị danh sách User ra màn hình

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const StateAndAPI = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data); // -> users [{}, {}, {}]
        }

        fetchUsers();
    }, [])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {users.map(user => (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default StateAndAPI
