import React from 'react'
import '../../index.css'
import Torneio from './Torneio'

function TodosTorneios(props) {
    return (
        <div className="divPrediletosMainContainer">
            
            <div className='divPrediletosUmSubContainer'>
                {/* <h1 className='NameGamePrediletos'>League of Legends</h1> */}
                <Torneio id={props.id}/>
            </div>
        </div>
        )
}

export default TodosTorneios