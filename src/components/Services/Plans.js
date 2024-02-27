import { useEffect, useState } from "react";



export function useFetch() {
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json'); // Reemplaza 'ruta/del/json/planes.json' con la ruta correcta de tu archivo JSON
                const data = await response.json();
                setPlanes(data.list);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return planes;
}