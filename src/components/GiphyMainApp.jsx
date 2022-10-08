import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import '../Main.css'

const GiphyMainApp = () => {

    const [inputValue, setInputValue] = useState('');
    const [gifs, setGifs] = useState([]);
    
    console.log(gifs);

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length < 2 || inputValue.trim().length > 50) return;

        getGifs(inputValue)
        .then(imgs => {
            setGifs(imgs);
        })

        
    }

    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <>
    <section className='App App-header'>
        <h1 className='display-1'>Giphy Main App</h1>
        <hr className='border border-3 border-white mx-auto w-75'/>

        <section className='container'>
            <form onSubmit={ onFormSubmit } >
                <div className='mb-3'>
                    <label className='form-label text-start w-100'>Busca un GIF</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        name='textoBuscar'
                        value={ inputValue }
                        onChange = { onInputChange }
                    />
                </div>

                <div className='mb-3'>
                    
                    <button type='submit' className='btn btn-outline-warning w-100'> Buscar </button>
                </div>
            </form>

            <div className='mb-3'>
                <button className='btn btn-outline-light w-100'> Limpiar Búsquedas</button>
            </div>

            <hr />
            <section >
                <h2>Resultados de las Búsquedas</h2>
                <section className='py-5'>
                    <h3> Nombre de la Categoría </h3>
                    <section className='d-flex flex-wrap gap-3 mt-5'>


                        {
                            gifs && gifs.length > 0 &&
                            gifs.map( (gif, index) => (

                                <div key={ gif.id } className="card" style={{ width: "18rem" }}>
                                    <img src={ gif.url } className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title text-dark"> { gif.title } </h5>
                                    </div>
                                </div>


                            ))
                        }
                        

                    </section>
                </section>
            </section>



        
        </section>

    </section>
    </>
  )
}

export default GiphyMainApp