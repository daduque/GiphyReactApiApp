import React from 'react'

const GiphyItem = ({ gif, saludo }) => {
  return (
      <div className="card" style={{ width: "18rem" }}>
          <img src={gif.url} className="card-img-top" />
          <div className="card-body">
              <h5 className="card-title text-dark"> {gif.title} </h5>
          </div>
          { saludo }
      </div>
  )
}

export default GiphyItem