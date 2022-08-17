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
            <div>

                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
                <p>Olá mundo!</p>
            </div>
        </div>
        )
}

export default Home