import React, { useState } from 'react'

const AddGiphyCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length < 2 || inputValue.trim().length > 50) return;
        onNewCategory(inputValue);
        setInputValue('');
    }

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={onFormSubmit} >
            <div className='mb-3'>
                <label className='form-label text-start w-100'>Busca un GIF</label>
                <input
                    type="text"
                    className='form-control'
                    name='textoBuscar'
                    value={inputValue}
                    onChange={onInputChange}
                />
            </div>

            <div className='mb-3'>

                <button type='submit' className='btn btn-outline-warning w-100'> Buscar </button>
            </div>
        </form>
    )
}

export default AddGiphyCategory