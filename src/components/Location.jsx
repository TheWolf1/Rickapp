import React from 'react'

const Location = ({location}) => {
  return (
    <div id='location' className='card-location'>
        <div className="card-location__title">
            <h1>{location?.name}</h1>
            
        </div>
        <div className="card-location__content">
            <ul>
                <li><strong>Type: </strong>{location?.type}</li>
                <li><strong>Dimension: </strong>{location?.dimension}</li>
                <li><strong>Population: </strong> {location?.residents.length} </li>
            </ul>
        </div>
    </div>
  )
}

export default Location