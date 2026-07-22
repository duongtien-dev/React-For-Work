// function , type -> .ts
// T: generic
// useFetch: nhận urlApi và tự xử lý call API, set(cập nhật) dữ liệu cho state
// useFetch đảm nhiệm 3 nhiệm vụ: call API, set state, trả ra data (dữ liệu từ API)

import { useEffect, useState } from "react"

function useFetch<T>(urlApi: string) {
    const [data, setData] = useState<T | null>(null); // IUser

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(urlApi);
            const data = await res.json();
            setData(data);
        };

        fetchData();
    }, [urlApi]);

    return { data }
}

export default useFetch
