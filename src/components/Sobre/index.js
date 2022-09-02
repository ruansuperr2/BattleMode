import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

function Sobre() {
    return (
        <div className="divMainContainer">
            <Navbar page="Sobre"/>
            <div className='divMainContainerSobre'>
                <div className='divConteudo'>
                    <div className='divImagens'>
                        <p>a</p>
                    </div>
                    <div className='divTextoSobre'>
                        <h1>Sobre BattleMode™</h1>
                        <p>A BattleMode™ permite a você e seus amigos competirem em torneios criados 
                        pela comunidade. Nós, a Inexorabilis Team, temos como objetivo tornar esses 
                        eventos fáceis de criar, intuitivos e altamente customizáveis, tanto para 
                        organizadores quanto participantes. Além disso, também queremos que seu 
                        campeonato ou time cresça no cenário e ganhe visibilidade nas nossas redes sociais.</p>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
        )
}

export default Sobre