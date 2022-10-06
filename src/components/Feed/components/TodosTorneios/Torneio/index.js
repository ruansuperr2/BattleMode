import React, { useState, useRef } from 'react'
import '../../../index.css'
import placeholderArt from './arteOnda2.png'
import placeholderArt2 from '../../../assets/CastelolAnimado.jpg'
import placeholderArt3 from '../../../../Home/assets/CSGO.png'

import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function TorneioUm() {
    const carousel = useRef(null)
    const [cooldown, setCooldown] = useState('')

    const handleLeftClick = e => {
        setCooldown('disabled')
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth
        setTimeout(() => {
            setCooldown('')
        }, 550);
    }

    const handleRightClick = e => {
        e.preventDefault()
        setCooldown('disabled')

        carousel.current.scrollLeft += carousel.current.offsetWidth
        setTimeout(() => {
            setCooldown('')
        }, 500);
    }

    return (
        <div className='torneioSetasMainContainer'>
            <div className='torneioContainer' ref={carousel}>

                <a href='./participar' className='Torneio' style={{backgroundImage: `url(${placeholderArt})`}}>
                    <h1 className='TorneioH1'>Gaia Cup</h1>
                </a>

                <a href='./participar' className='Torneio' style={{backgroundImage: `url(${placeholderArt2})`}}>
                    <h1 className='TorneioH1'>Gaia Cup</h1>
                </a>

                <a href='./participar' className='Torneio' style={{backgroundImage: `url(${placeholderArt3})`}}>
                    <h1 className='TorneioH1'>Gaia Cup</h1>
                </a>

            </div>
            <div className='containerTorneioSetas'>
                <button className='buttonSeta' onClick={handleLeftClick} disabled={cooldown}><AiOutlineArrowLeft/></button>
                <button className='buttonSeta' onClick={handleRightClick} disabled={cooldown}><AiOutlineArrowRight/></button>
            </div>
        </div>
        )
}

export default TorneioUm