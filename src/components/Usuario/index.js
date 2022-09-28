import React from 'react'
import './index.css'
import Fundo from './components/Fundo'
import JogosFav from './components/JogosFav'
import Descricao from './components/Descricao'
import Conquistas from './components/Conquistas'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';

function Usuario(){
    const { id } = useParams();
    console.log(id)
    return(
        
        <div className="divUsuarioDMainContainer">
            <Navbar page={'usuario'}/>

                <div className='divUsuarioSubMainContainer paddingLeft '>
                    <button>Editar</button>
                    <Fundo id={id}/>
                    <div className='divUsuarioSubMainContainerCompo' >
                        <Descricao id={id}/>
                        <JogosFav id={id}/>
                        <Conquistas id={id}/>
                    </div>
                </div>

            <Footer/>
        </div>
    )
}


export default Usuario