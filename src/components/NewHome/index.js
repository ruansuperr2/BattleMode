import React, { useEffect, useState, useRef } from 'react'
import Navbar from "../Navbar"
import './index.css'

import $ from 'jquery'

let currentPage = 'pageOne'
let currentSlide = 'slideOne'
const callPageChanger = () => {
    try{
        
        switch(currentPage){
            case 'pageOne':
                document.querySelector('.pageNumberOne').classList.add('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.remove('currentPageHome')
                document.querySelector('.pageNumberThree').classList.remove('currentPageHome')
                document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
                break
            case 'pageTwo':
                document.querySelector('.pageNumberOne').classList.remove('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.add('currentPageHome')
                document.querySelector('.pageNumberThree').classList.remove('currentPageHome')
                document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
                break
            case 'pageThree':
                
                document.querySelector('.pageNumberOne').classList.remove('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.remove('currentPageHome')
                document.querySelector('.pageNumberThree').classList.add('currentPageHome')
                document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
                break
        }
    }catch{
        
    }
}

let getGamesTry = 0
const callSlideChanger = () => {


    switch(currentSlide){
        case 'slideOne':
            document.querySelector('.dotOneSlide').classList.add('currentPageHome')
            document.querySelector('.dotTwoSlide').classList.remove('currentPageHome')
            document.querySelector('.dotThreeSlide').classList.remove('currentPageHome')
            document.querySelector('.divSliderPageOne').style.width = '100%'
            document.querySelector('.divSliderPageTwo').style.width = '0%'
            document.querySelector('.divSliderPageThree').style.width = '0%'
            document.querySelector('.sliderRightTitle').textContent = 'O perfil do seu jeito!'
            document.querySelector('.sliderRightFirstText').textContent = `    Visual é tudo, e aqui você poderá fazer o perfil com a sua cara, podendo personalizar todos os aspectos para deixar a experiência de cada página diferente`
            document.querySelector('.sliderRightSecondText').textContent = `   O potêncial de todos os jogadores pode ser liberado atravez de uma pequena mudança de cor, talvez o seu perfil chame a atenção de um Chefe de Equipe e te convide para a próxima temporada de BattleMode Racing?`

            break
        case 'slideTwo':
            document.querySelector('.dotOneSlide').classList.remove('currentPageHome')
            document.querySelector('.dotTwoSlide').classList.add('currentPageHome')
            document.querySelector('.dotThreeSlide').classList.remove('currentPageHome')
            document.querySelector('.divSliderPageOne').style.width = '0%'
            document.querySelector('.divSliderPageTwo').style.width = '100%'
            document.querySelector('.divSliderPageThree').style.width = '0%'
            document.querySelector('.sliderRightTitle').textContent = 'A equipe dos sonhos!'
            break
        case 'slideThree':
            document.querySelector('.dotOneSlide').classList.remove('currentPageHome')
            document.querySelector('.dotTwoSlide').classList.remove('currentPageHome')
            document.querySelector('.dotThreeSlide').classList.add('currentPageHome')
            document.querySelector('.divSliderPageOne').style.width = '0%'
            document.querySelector('.divSliderPageTwo').style.width = '0%'
            document.querySelector('.divSliderPageThree').style.width = '100%'
            document.querySelector('.sliderRightTitle').textContent = 'Modelo!'
            break

    }
}


let index = 0

const pageHandling = (funcProp) => {
    if(funcProp === 0){
        currentPage = 'pageOne'
        callPageChanger()

    }else if(funcProp === 4){
        currentPage ='pageTwo'
        callPageChanger()

    }else if(funcProp === 8){
        currentPage ='pageThree'
        callPageChanger()

    }
    
}

$( window ).on('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            if(index === 0){
                index = 0
            }else{
                index--
            }
            pageHandling(index)
        }
        else{
            if(index === 8){
                index = 8
            }else{
                index++
            }
            pageHandling(index)
        }
})
let able = 0

export default function NewHome () {
    const [torneio, setTorneio] = useState([])
    const [game, setGame] = useState([])
    
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

    const callGames = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setGame(val.data)})
        }catch(error){
            console.log(error)
        }
    }

    if(getGamesTry < 10){
        getGamesTry++
        callTorneio()
        callGames()
    }

    useEffect(() => {
        switch(currentPage){
            case 'pageOne':
                document.querySelector('.pageNumberOne').classList.add('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.remove('currentPageHome')
                document.querySelector('.pageNumberThree').classList.remove('currentPageHome')
                break
            case 'pageTwo':
                document.querySelector('.pageNumberOne').classList.remove('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.add('currentPageHome')
                document.querySelector('.pageNumberThree').classList.remove('currentPageHome')
                break
            case 'pageThree':
                document.querySelector('.pageNumberOne').classList.remove('currentPageHome')
                document.querySelector('.pageNumberTwo').classList.remove('currentPageHome')
                document.querySelector('.pageNumberThree').classList.add('currentPageHome')
                break
        }

        switch (currentSlide) {
            case 'slideOne':
                document.querySelector('.dotOneSlide').classList.add('currentPageHome')
                document.querySelector('.dotTwoSlide').classList.remove('currentPageHome')
                document.querySelector('.dotThreeSlide').classList.remove('currentPageHome')
                document.querySelector('.divSliderPageOne').style.width = '100%'
                document.querySelector('.divSliderPageTwo').style.width = '0%'
                document.querySelector('.divSliderPageThree').style.width = '0%'
                document.querySelector('.sliderRightTitle').textContent = 'O perfil do seu jeito!'
                break
            case 'slideTwo':
                document.querySelector('.dotOneSlide').classList.remove('currentPageHome')
                document.querySelector('.dotTwoSlide').classList.add('currentPageHome')
                document.querySelector('.dotThreeSlide').classList.remove('currentPageHome')
                document.querySelector('.divSliderPageOne').style.width = '0%'
                document.querySelector('.divSliderPageTwo').style.width = '100%'
                document.querySelector('.divSliderPageThree').style.width = '0%'
                document.querySelector('.sliderRightTitle').textContent = 'A equipe dos sonhos!'
                break
            case 'slideThree':
                document.querySelector('.dotOneSlide').classList.remove('currentPageHome')
                document.querySelector('.dotTwoSlide').classList.remove('currentPageHome')
                document.querySelector('.dotThreeSlide').classList.add('currentPageHome')
                document.querySelector('.divSliderPageOne').style.width = '0%'
                document.querySelector('.divSliderPageTwo').style.width = '0%'
                document.querySelector('.divSliderPageThree').style.width = '100%'
                document.querySelector('.sliderRightTitle').textContent = 'Modelo!'
                break
            }
            
    })

    if(able === 1){
        callPageChanger()
    }

    return(
        <div className="containerNewHome" onLoad={() => {
            callPageChanger()
            able = 1
        }}>
            <Navbar/>
            <div className="paddingLeft containerNewHome">
                <div>
                    <div className="containerPageOneHome">
                        <div className="containerPageOneHomeContent">
                            <div className="miniDivider"></div>
                            <div className="labelPageOneHome"></div>
                            <div className='tourneamentHighlightContainer'>
                                { torneio.slice(-3).map( (findTorneio) => {
                                    
                                    return <div onClick={() => {window.location.href = `./t/${findTorneio.id}`}} key={findTorneio.id} style={{backgroundImage: `url(${findTorneio.thumbnail})`}} className='tourneamentHighlighted bigTourneamentHiglightOne'>
                                        <div className='tourneamentHighlitedDecoration'></div>
            

                                        <label><img src={findTorneio.logo} alt='img'/>{findTorneio.nome}</label>
                                    </div>

                                })}
                                
                               {/* <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/85422afb467e9456013a2a51d4dff702.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightOne'>
                                    <div className='tourneamentHighlitedDecoration'></div>


                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/4800deb3f3be382f97782401f775184a.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightTwo'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3031edd9d9431ac8a6598b5a47997a9c.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightThree'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div> 
                            </div> */}
                            </div>
                            <label className='labelAskingPageOneHome'>
                                <label>Ficou interessado em um desses eventos? </label>
                                <label>Faça <a href='./login'>login agora</a> e dê uma olhada nos torneios de várias modalidades e jogos na plataforma!</label>
                            </label>
                        </div>
                        <div className='containerDivider containerTwoDivider'/>
                        <div className="containerPageTwoHomeContent" >
                            
                            <div className="miniDivider"></div>
                            <div className="labelPageTwoHome"></div>
                            <div className='gamesHighlightContainer'>
                                { game.slice(-8).map( (findGame) => {
                                    
                                    return <div onClick={() => {window.location.href = `./feed/${findGame.id}`}} style={{backgroundImage: `url(${findGame.imgFundo})`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>

                                })}
                            </div>
                            <label className='labelAskingPageOneHome'>
                                <label>E essa lista só aumenta! </label>
                                <label>Faça <a href='./login'>login agora</a> e adicione o seu jogo favorito para o seu perfil!</label>
                            </label>
                        </div>
                        <div className='containerDivider containerThreeDivider'/>
                        <div className="containerPageThreeHomeContent" >
                            
                            <div className="miniDivider"></div>
                            <div className="labelPageThreeHome"></div>
                            <div className='customizationSliderHighlightContainer'>
                                <div className='divContainerSliderNewHome'>

                                    <div className='customizationSliderImageSlide'>
                                        {/* <div className='tourneamentHighlitedDecoration'></div> */}
                                        {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                        {/* <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label> */}
                                        <div className='divContainerSliderPages'>
                                            <div className='divSliderPage divSliderPageOne'>
                                                
                                            </div>
                                            <div className='divSliderPage divSliderPageTwo'>

                                            </div>
                                            <div className='divSliderPage divSliderPageThree'>

                                            </div>
                                        </div>
                                        <div className='sliderDots'>
                                            <div onClick={() => {
                                                console.log('test')
                                                currentSlide = 'slideOne'
                                                callSlideChanger()
                                            }} className='dotsFromSlide dotOneSlide'/>
                                            <div onClick={() => {
                                                currentSlide = 'slideTwo'
                                                callSlideChanger()
                                            }} className='dotsFromSlide dotTwoSlide'/>
                                            <div onClick={() => {
                                                currentSlide = 'slideThree'
                                                callSlideChanger()
                                            }} className='dotsFromSlide dotThreeSlide'/>
                                        </div>
                                    </div>
                                    <div className='customizationSliderTextSlide'>
                                        <div>
                                            <h2 className='sliderRightTitle'>Titulo</h2>
                                        </div>
                                        <div>
                                            <p className='sliderRightFirstText'>Visual é tudo, e aqui você poderá fazer o perfil com a sua cara, podendo personalizar todos os aspectos para deixar a experiência de cada página diferente</p>
                                            <p className='sliderRightSecondText'>O potêncial de todos os jogadores pode ser liberado atravez de uma pequena mudança de cor, talvez o seu perfil chame a atenção de um Chefe de Equipe e te convide para a próxima temporada de BattleMode Racing? </p>
                                        </div>
                                        {/* <div className='tourneamentHighlitedDecoration'></div> */}
                                        {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                        {/* <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>                      
                </div>
            </div>
            <div className="containerPagesSelector">
                <div onClick={() => {
                        index = 0
                        currentPage = 'pageOne'
                        callPageChanger()
                        // document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                        //     behavior: 'smooth'
                        // }, 500)
                        document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberOne currentPageHome"></div>
                <div onClick={() => {
                        index = 4   
                        currentPage = 'pageTwo'
                        callPageChanger()
                        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberTwo"></div>
                <div onClick={() => {
                        index = 8
                        currentPage = 'pageThree'
                        callPageChanger()
                        document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberThree"></div>
            </div>
        </div>
    )
}