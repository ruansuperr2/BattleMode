import React from 'react'
import './index.css'
import Fundo from './components/Fundo'
import JogosFav from './components/JogosFav'
import Descricao from './components/Descricao'
import Conquistas from './components/Conquistas'
import Navbar from '../Navbar'
import Footer from '../Footer'


function Usuario(){
    return(
        <div className="divUsuarioDMainContainer">
            <Navbar/>

                <div className='divUsuarioSubMainContainer paddingLeft '>
                    <button>Editar</button>
                    <Fundo/>
                    <div className='divUsuarioSubMainContainerCompo' >
                        <Descricao/>
                        <JogosFav/>
                        <Conquistas/>
                    </div>
                </div>

            <Footer/>
        </div>
    )
}


export default Usuario