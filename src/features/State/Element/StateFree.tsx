import { useEffect, useState } from "react"

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUser {
    id: number;
    name: string;
    phone: string;
    // company: ICompany;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export default function StateFree() {
    // const [user, setUser] = useState<IUser | null>(null)
    const [listUsers, setListUsers] = useState<IUser[]>([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect, load đầu tiên trước khi render component, để lấy dữ liệu từ API
    console.log('listUsers', listUsers)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            // console.log(data)
            setListUsers(data)
            // setUser(data)
        }
        fetchData()
    }, [])
    // dependency array, để lấy dữ liệu từ API, khi listUsers thay đổi, thì useEffect sẽ chạy lại


    return (
        <div>
            <h1>Danh sach nguo dung + API</h1>
            <div className="flex flex-col gap-4">
                {
                    listUsers.map((user) => (
                        <div key={user.id} className="border-2 border-gray-300 rounded-md p-4">
                            <h2>{user.name}</h2>
                            <p>{user.phone}</p>
                            <p>{user.company.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
