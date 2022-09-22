import React from 'react'
import '../../../index.css'
import placeholderArt from './arteOnda2.png'

function TorneioUm() {
    return (
        <a href='./participar' className="Torneio" style={{backgroundImage: `url(${placeholderArt})`}}>
            <h1 className='TorneioH1'>Gaia Cup</h1>
        </a>
        )
}

export default TorneioUm