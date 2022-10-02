import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ResidentInfo = ({ resident }) => {
    const [character, setCharacter] = useState()
    useEffect(() => {
        axios.get(resident)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [])


    let alive = {
        color:'green'
    }

    let dead = {
        color:'red'
    }
    return (
        <div className='card' >
            <div className="card-img">
                <div className="card-img_status">
                    <i className="fa-solid fa-circle" style={character?.status=='Alive' ? alive : dead}></i>
                    {character?.status}
                </div>
                <img src={character?.image} alt="" />
            </div>
            <div className="card-info">
                <h2>{character?.name}</h2>

                <ul>
                    <li>
                        <span>RAZA</span>
                        <h3>{character?.species}</h3>
                    </li>
                    <li>
                        <span>ORIGEN</span>
                        <h3>{character?.origin.name}</h3>
                    </li>
                    <li>
                        <span>APARICION EN EPISODIOS</span>
                        <h3>{character?.episode.length}</h3>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default ResidentInfo