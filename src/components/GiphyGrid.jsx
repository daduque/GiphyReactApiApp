import React, { useState, useEffect } from 'react'
import GiphyItem from './GiphyItem'
import { getGifs } from '../helpers/getGifs'

const GiphyGrid = ({category}) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {

    getGifs(category)
    .then(imgs => {
        setGifs(imgs);
    })

    }, [category])
  
    return (
    <section >
    
    <section className='py-5'>
        <h3 className='text-start'> { category } </h3>
        <section className='d-flex flex-wrap gap-3 mt-5'>


            {
                gifs && gifs.length > 0 &&
                gifs.map( (gif) => (

                    <GiphyItem gif = { gif } key={gif.id}/>


                ))
            }
            

        </section>
    </section>
</section>
  )
}

export default GiphyGrid