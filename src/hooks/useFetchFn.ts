import { useEffect, useState } from "react";

// T -> generic ANY
// hardcode
function useFetchFn<T>(urlApi: string) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(urlApi);
            const data = await res.json();
            setData(data); // data co du lieu
        }

        fetchData();
    }, [urlApi])

    return { data }
}

export default useFetchFn
