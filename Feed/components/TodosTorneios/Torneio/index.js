import React, { useState } from 'react'
import '../../../index.css'
import placeholderArt from './arteOnda2.png'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

function TorneioUm() {
    return (
        <>
            <button className='buttonSeta'><AiOutlineArrowLeft/></button>
            <a href='./participar' style={{backgroundImage: `url(require("./components/TodosTorneios/Torneio/arteOnda2.png"))`}} className="Torneio">
                <h1 className='TorneioH1'>Gaia Cup</h1>
            </a>
            <button className='buttonSeta'><AiOutlineArrowRight/></button>
        </>
        )
}

export default TorneioUm