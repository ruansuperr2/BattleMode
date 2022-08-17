import React from 'react'
import './index.css'
import Noticias from '../Noticias'

function Home() {
    return (
        <div className="divMainContainerHome">
            <div className="divVideoMainContainerHome">
                <div className="divVideoShadowMainContainerHome" />
                <video width="100%" autoPlay muted loop >
                    <source src={require("./assets/viideo.webm")} type="video/webm"/>
                </video>
                
            </div>
            <Noticias/>
            <div className='divSecondMainContainerHome'>
                <div className='divSubSecondContainerHome'>
                    <h1 className='h1DivSecond'>Título maneiro</h1>
                    <p>O texto informativo é um texto em que o escritor expõe brevemente um tema, fato ou circunstância ao leitor. 
                        Trata-se de uma produção textual objetiva, 
                        normalmente em prosa, com linguagem clara e direta. 
                        Tem como objetivo principal transmitir informação sobre algo, 
                        estando isento de duplas interpretações.</p>
                </div>

                <div className='divSubSecondDoisContainerHome'>
                    <img src={require("./assets/branco.png")}/>
                </div>
            </div>
        </div>
        )
}

export default Home