import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Jogo from './components/Jogo'
import './index.css'

function Jogos() {
    return (
        <div>
            <Navbar page="jogos"/>
            <div className="paddingLeft divMainJogos">
                <h3 className="titleGames">O maior show de competição! Adicione o seu jogo favorito ao seu perfil!</h3>
                <div className="divJogosMainContainer">
                    
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                    <Jogo/>
                </div>
                <Footer/>
            </div>
        </div>
        )
}

export default Jogos