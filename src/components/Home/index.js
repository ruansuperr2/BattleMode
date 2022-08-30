import React, { useState, useEffect } from 'react'
import './index.css'
import Noticias from './components/Noticias'
import LoginOrUpcomings from './components/LoginOrUpcomings'

function Home() {

    const [imageDotOne, setImageDotOne] = useState(true)
    const [imageDotTwo, setImageDotTwo] = useState(false)
    const [imageDotThree, setImageDotThree] = useState(false)
    const [carrosselImage, setCarrosselImage] = useState('./assets/CSGO.png')

    console.log(imageDotOne, imageDotTwo, imageDotThree, carrosselImage)
    setTimeout(() => {
        if (imageDotOne === false && imageDotThree === true && imageDotTwo === false) {
            setCarrosselImage('./assets/CSGO.png')
            setImageDotOne(true)
            setImageDotTwo(false)
            setImageDotThree(false);

        } else if (imageDotOne === true && imageDotThree === false && imageDotTwo === false) {
            setCarrosselImage('./assets/F1_2022.png')
            setImageDotOne(false)
            setImageDotTwo(true)
            setImageDotThree(false);

        } else if (imageDotOne === false && imageDotThree === false && imageDotTwo === true) {
            setCarrosselImage('./assets/R6S.png')
            setImageDotOne(false)
            setImageDotTwo(false)
            setImageDotThree(true);

        }
    }, 2000)





    return (
        <div className="divMainContainerHome">
            <div className="divCarrosselMainContainerHome">
                <div className="divVideoMainContainerHome">
                    <div className="divVideoShadowMainContainerHome" />
                    <div className="divLabelCarrosselMainContainerHome">
                        <h1 className="h1DivSecond">Título</h1>
                        <label>O texto informativo é um texto em que o escritor expõe brevemente um tema</label>
                    </div>
                    <img className="imgCarrossel" src={require(`${carrosselImage}`)} />
                </div>
                <div className="divDots">
                    <div>
                        <input checked={imageDotOne} type="radio" id="rad1" name="rads"/>
                        <label></label>
                        <input checked={imageDotTwo}  type="radio" id="rad2" name="rads" />
                        <label></label>
                        <input checked={imageDotThree}  type="radio" id="rad3" name="rads" />
                        <label></label>
                    </div>
                </div>
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
            <LoginOrUpcomings/>
        </div>
        )
}

export default Home