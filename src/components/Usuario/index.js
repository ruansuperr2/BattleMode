import React from 'react'
import './index.css'
import Fundo from './components/Fundo'
import JogosFav from './components/JogosFav'
import Descricao from './components/Descricao'
import Conquistas from './components/Conquistas'

function Usuario(){
    return(
        <div className='divUsuarioMainContainer'>
            <div className='divUsuarioSubMainContainer'>
                <button>Editar</button>
                <Fundo/>
                <JogosFav/>
                <Descricao/>
                <Conquistas/>
            </div>
        </div>
    )
}


export default Usuario