import React from 'react';
import './GifGridItem.css';

export const GifGridItem = ({url, title}) => {
    return (
        <div className='card animate__fadeOut'>
            <img
                src={url}
                alt={title}
            ></img>
        </div>
    )
}
