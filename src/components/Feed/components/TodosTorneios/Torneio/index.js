import React, { useState, useRef } from 'react'
import '../../../index.css'
import placeholderArt from './arteOnda2.png'
import placeholderArt2 from '../../../assets/CastelolAnimado.jpg'
import placeholderArt3 from '../../../../Home/assets/CSGO.png'

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

let getGamesTry = 0
function TorneioUm(props) {


    const [torneio, setTorneio] = useState([])

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

    const callTorneio = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/torneio')
            const data = response.json()
            data.then(
                (val) => {setTorneio(val.data)})
        }catch(error){
            console.log(error)
        }
    }

    if(getGamesTry < 10){
        getGamesTry++
        callGames()
        callTorneio()
        console.log('2', props)
    }

    const carousel = useRef(null)
    const [cooldown, setCooldown] = useState('')

    const handleLeftClick = e => {
        setCooldown('disabled')
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth -14
        setTimeout(() => {
            setCooldown('')
        }, 550);
    }

    const handleRightClick = e => {
        e.preventDefault()
        setCooldown('disabled')

        carousel.current.scrollLeft += carousel.current.offsetWidth -14
        setTimeout(() => {
            setCooldown('')
        }, 550);
    }

    return (
        <div className='torneioSetasMainContainer'>
            <div className='torneioContainer' ref={carousel}>
                { torneio.map( (findTorneio) => {
                    if(props.id === findTorneio.gameId){
                        return  <a key={findTorneio.id} href={`../t/${findTorneio.id}`} className='Torneio' style={{backgroundImage: `url(${findTorneio.thumbnail})`}}>
                                    <h1 className='TorneioH1'>{findTorneio.nome}</h1>
                                </a>
                    }

                }

                ) }
            </div>
            <div className='containerTorneioSetas'>
                <button className='buttonSeta' onClick={handleLeftClick} disabled={cooldown}><AiOutlineArrowLeft/></button>
                <button className='buttonSeta' onClick={handleRightClick} disabled={cooldown}><AiOutlineArrowRight/></button>
            </div>
        </div>
        )
}

export default TorneioUm