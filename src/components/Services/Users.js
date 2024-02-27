import { useEffect, useState } from "react";

export function useFetch() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://rimac-front-end-challenge.netlify.app/api/user.json")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    return { data }
}

