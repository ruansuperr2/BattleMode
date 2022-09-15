import React from 'react'
import '../../index.css'

function Descricao(){
    return(
        <div className='divDescricaoMainContainer'>
            <div className='divBiografia'>
                <h1>Biografia<div className='divDescricaoImg2'/></h1>
                <textarea maxlength="350"></textarea>
            </div>
        </div>
    )
}


export default Descricao