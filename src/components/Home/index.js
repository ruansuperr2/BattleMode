import React, { useState } from 'react'
import './index.css'
import Noticias from '../Noticias'

function Home() {
    let dotImage = 1

    const [imageDotOne, setImageDotOne] = useState(true)
    const [imageDotTwo, setImageDotTwo] = useState(false)
    const [imageDotThree, setImageDotThree] = useState(false)
    const [carrosselImage, setCarrosselImage] = useState('./assets/CSGO.png')
    
    function callbackTimeout() {
        setTimeout(() => {
            dotImage++
            if(dotImage === 4){
                dotImage = 1
            }

            switch(dotImage){
                case 1:
                    setCarrosselImage('./assets/CSGO.png')
                    setImageDotOne(true)
                    setImageDotTwo(false)
                    setImageDotThree(false)
                    setTimeout(() => {
                        callbackTimeout() 
                    }, 5000);
                   
                    break
                case 2:
                    setCarrosselImage('./assets/F1_2022.png')
                    setImageDotOne(false)
                    setImageDotTwo(true)
                    setImageDotThree(false)
                    setTimeout(() => {
                        callbackTimeout() 
                    }, 5000);
                    break
                case 3:
                    setCarrosselImage('./assets/R6S.png')
                    setImageDotOne(false)
                    setImageDotTwo(false)
                    setImageDotThree(true)
                    setTimeout(() => {
                        callbackTimeout() 
                    }, 5000);
                    break
                default:
                    break
            }

        }, 5000)
    }

    

    return (
        <div className="divMainContainerHome" onLoad={callbackTimeout()}>
            <div className="divCarrosselMainContainerHome">
                <div className="divVideoMainContainerHome">
                    <div className="divVideoShadowMainContainerHome" />
                    <div className="divLabelCarrosselMainContainerHome">
                        <h1 className="h1DivSecond">Título</h1>
                        <label>O texto informativo é um texto em que o escritor expõe brevemente um tema</label>
                    </div>
                <img className="imgCarrossel" src={require(`${carrosselImage}`)}/>
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
        </div>
        )
}

export default Home