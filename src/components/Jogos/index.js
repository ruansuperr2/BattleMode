import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Jogo from './components/Jogo'
import './index.css'

import $ from 'jquery'


let getGamesTry = 0
function Jogos() {
    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
            console.log(error)
        }
    }

    const callHtmlGames = () => {
        console.log(jogo)
    }

    if(getGamesTry < 10){
        getGamesTry++
        callGames()
        if(getGamesTry === 9){
            callHtmlGames()
        }
    }


    return (
        <div>
            <Navbar page="jogos"/>
            <div className="paddingLeft divMainJogos">
                <h3 className="titleGames">O maior show de competição! Adicione o seu jogo favorito ao seu perfil!</h3>
                <div className="divJogosMainContainer">
                    { jogo.map( (jogo) => 
                        <div key={jogo.id} className='divJogosSubContainer' id={jogo.id}>
                            <div className='divJogosContainer'>
                                <img className='divJogosImg' src={jogo.imgFundo}/>
                                <div>
                                    <div className="addButton"/>
                                    <h5>{jogo.nome}</h5>
                                    <p>{jogo.descricaoLonga}</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
                <Footer/>
            </div>
        </div>
        )
}

export default Jogos