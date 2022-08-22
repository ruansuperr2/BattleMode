import React from 'react'
import '../../index.css'
import TorneioUm from './components/TorneioUm'
import TorneioDois from './components/TorneioDois'
import TorneioTres from './components/TorneioTres'

function Prediletos() {
    return (
        <div className="divPrediletosMainContainer">
            <h1 className='TittlePrediletos'>Seus Favoritos</h1>
            <div className='divPrediletosUmSubContainer'>
                <h1 className='NameGamePrediletos'>Valorant</h1>
                <TorneioUm/>
                <TorneioDois/>
                <TorneioTres/>
            </div>
            
            <div className='divPrediletosDoisSubContainer'>
            <h1 className='NameGamePrediletos'>Rainbow-six</h1>
                <TorneioUm/>
                <TorneioDois/>
                <TorneioTres/>
            </div>
        </div>
        )
}

export default Prediletos