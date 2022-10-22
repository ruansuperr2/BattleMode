import React, { useEffect, useState, useRef } from 'react'
import Navbar from "../Navbar"
import './index.css'

import $ from 'jquery'

let currentPage = 'pageOne'
const callPageChanger = () => {
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
}


let index = 0
const pageHandling = (funcProp) => {
    if(funcProp === 0){
        currentPage = 'pageOne'
        callPageChanger()
        document.querySelector('.containerPageOneHomeContent').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }else if(funcProp === 4){
        currentPage ='pageTwo'
        callPageChanger()
        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }else if(funcProp === 8){
        currentPage ='pageThree'
        callPageChanger()
        document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }
    
}

$( window ).on('mousewheel', function(e){
    if(e.originalEvent.wheelDelta /120 > 0) {
        console.log('up')
        if(index === 0){
            index = 0
        }else{
            index--
        }
        pageHandling(index)
    }
    else{
        console.log('down')
        if(index === 16){
            index = 16
        }else{
            index++
        }
        pageHandling(index)
    }
})

export default function NewHome () {

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
        // window.addEventListener("wheel", (event) => {
        //     console.log(document.querySelector('.containerPageTwoHomeContent').getBoundingClientRect())
        //     console.log(event)
        //     if(event.deltaY === 100){
        //         if(index === 16){
        //             index = 16
        //         }else{
        //             index++
        //         }
        //     }else if(event.deltaY === -100){
        //         if(index === 0){
        //             index = 0
        //         }else{
        //             index--   
        //         }
        //     }
        //     console.log(index)
            
        //     pageHandling(index)
        // })
        
    })


    return(
        <div className="containerNewHome">
            <Navbar/>
            <div className="paddingLeft containerNewHome">
                <div>
                    <div className="containerPageOneHome">
                        <div className="containerPageOneHomeContent">
                            <div className="miniDivider"></div>
                            <div className="labelPageOneHome"></div>
                            <div className='tourneamentHighlightContainer'>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/85422afb467e9456013a2a51d4dff702.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightOne'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/4800deb3f3be382f97782401f775184a.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightTwo'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/3031edd9d9431ac8a6598b5a47997a9c.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightThree'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
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
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/80bf407312035ac647db895d9782ea26.jpg)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/51e0f86b7cb74096e922bd52653bd235.png)`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/fba05666aec048c550089d9bc5ac8f53.jpg)`}} className='gameHighlighted bigGameHiglightThree'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/cf29ee336b07c0572c810f62f5543525.jpg)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://images-ext-1.discordapp.net/external/gw0a3aqpIMCK8cfBE40cm5-9qg90ZV6Q2eIH1zvCtHc/https/cdn2.steamgriddb.com/file/sgdb-cdn/thumb/9231cf33ba4a94d91af5b5071a671346.jpg)`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://i.pinimg.com/736x/d1/59/e9/d159e9ca272b73f56ef2b770a7c0b17b.jpg)`}} className='gameHighlighted bigGameHiglightThree'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/0ed5055450adbd836945761a6fa43ee0.jpg)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/12dc78e6688e6756f8e934e778b817fe.jpg)`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>
                            </div>
                            <label className='labelAskingPageOneHome'>
                                <label>E essa lista só aumenta! </label>
                                <label>Faça <a href='./login'>login agora</a> e adicione o seu jogo favorito para o seu perfil!</label>
                            </label>
                        </div>
                        <div className='containerDivider containerThreeDivider'/>
                        <div className="containerPageThreeHomeContent" >
                            
                        
                            <div className="labelPageThreeHome">CARALHOU SÓ, FUNCIONOU</div>
                            <div className='tourneamentHighlightContainer'>
                                <div style={{backgroundImage: `url(https://am-a.akamaihd.net/image?resize=384:200&f=http%3A%2F%2Fstatic.lolesports.com%2Fdrops%2F1666107653920_JDG.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightOne'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://am-a.akamaihd.net/image?resize=384:200&f=http%3A%2F%2Fstatic.lolesports.com%2Fdrops%2F1666107653920_JDG.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightTwo'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://am-a.akamaihd.net/image?resize=384:200&f=http%3A%2F%2Fstatic.lolesports.com%2Fdrops%2F1666107653920_JDG.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightThree'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
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