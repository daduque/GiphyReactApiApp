import React, { useState } from 'react'
import '../Main.css'
import AddGiphyCategory from './AddGiphyCategory';
import GiphyGrid from './GiphyGrid';

const GiphyMainApp = () => {

    
    const [categories, setCategories] = useState([])
        

    const onAddCategory = (inputValue) => {
        if(categories.includes(inputValue)) return;
        setCategories([inputValue, ...categories]);
    }


  return (
    <>
    <section className='App App-header'>
        <h1 className='display-1'>Giphy Main App</h1>
        <hr className='border border-3 border-white mx-auto w-75'/>

        <section className='container'>

        <AddGiphyCategory onNewCategory = { (inputValue) => onAddCategory(inputValue) }/>

            <div className='mb-3'>
                <button className='btn btn-outline-light w-100'> Limpiar Búsquedas</button>
            </div>

            <hr />

            <h2>Resultado de la Búsqueda</h2>

            {
                categories && categories.length > 0 &&
                categories.map( (category) => (
                    <GiphyGrid category={ category } key={ category }/>
                ))
            }




        
        </section>

    </section>
    </>
  )
}

export default GiphyMainApp