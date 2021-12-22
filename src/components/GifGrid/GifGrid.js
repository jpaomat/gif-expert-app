import React, { useEffect, useState } from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { getGifs } from '../../services/getGifs';
import { GifGridItem } from '../GifGridItem/GifGridItem';
import PropTypes from 'prop-types';
import './GifGrid.css';

export const GifGrid = ({ category }) => {

    // PRIMER FORMA DE HACERLO
    // const [gifsList, setGifsList] = useState([]);
    // useEffect(() => {
    //     getGifs(category).then(setGifsList); // como devuelve un solo argumento se puede llamar así
    // }, [category])

    // ALTERNATIVA PARA QUE QUEDE ORDENADO Y MAS LIMPIO EL COMPONENTE
    const {data:gifsList, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && 'Cargando...'}
            <div className='card-grid'>
                {
                    gifsList.map(imgData => (
                        <GifGridItem
                            key={imgData.id}
                            {...imgData}
                        />
                    ))
                }
                <br></br>
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired
}

