import { useEffect, useState } from "react"
import { getGifs } from "../services/getGifs";

export const useFetchGifs = (category) => {   //custom hook
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category).then(imgs => {
            setstate({
                data: imgs,
                loading: false
            })
        }); // como devuelve un solo argumento se puede llamar así
    }, [category]);

    return state;
}
