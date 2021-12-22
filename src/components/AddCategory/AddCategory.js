import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './AddCategory.css';


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault(); // se usa para que no se recargue la pagina al ejecutar el submit
        if (inputValue.trim().length > 2) {
            setCategories(ctgs=>[inputValue, ...ctgs]);
            setInputValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={inputValue}
                    onChange={handleInputChange}
                ></input>
                <p>{inputValue}</p>
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
