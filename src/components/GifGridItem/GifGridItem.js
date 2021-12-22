import React from 'react';
import PropTypes from 'prop-types';
import './GifGridItem.css';

export const GifGridItem = ({url, title}) => {
    return (
        <div className='card animate__fadeOut'>
            <img
                src={url}
                alt={title}
            ></img>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
