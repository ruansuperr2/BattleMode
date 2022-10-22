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
    }else if(funcProp === 8){
        currentPage ='pageTwo'
        callPageChanger()
        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
            behavior: 'smooth'
        }, 500)
    }else if(funcProp === 16){
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
                                <div style={{backgroundImage: `url(https://am-a.akamaihd.net/image?resize=384:200&f=http%3A%2F%2Fstatic.lolesports.com%2Fdrops%2F1666107653920_JDG.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightOne'>
                                    <div className='tourneamentHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                    <label><img src={require('./F1_2022.png')} alt='img'/>TESTE TESTE TESTE - VALORANT #01</label>
                                </div>
                                <div style={{backgroundImage: `url(https://i.ytimg.com/vi/Zahi70uvvJg/sddefault_live.jpg)`}} className='tourneamentHighlighted bigTourneamentHiglightTwo'>
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
                                <div style={{backgroundImage: `url(https://sm.ign.com/ign_br/game/o/overwatch-/overwatch-2_x1j6.jpg)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://www.fifplay.com/img/public/fifa-23-cover-star-kylian-mbappe.jpg)`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://cdn.givemesport.com/wp-content/uploads/2022/05/FR2AEX1XwAQx1Tz-727x1024.jpg)`}} className='gameHighlighted bigGameHiglightThree'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://images.pcgamingwiki.com/4/40/League_of_Legends_-_cover.jpg)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-272x380.jpg)`}} className='gameHighlighted bigGameHiglightTwo'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgTwo'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://i.pinimg.com/736x/d1/59/e9/d159e9ca272b73f56ef2b770a7c0b17b.jpg)`}} className='gameHighlighted bigGameHiglightThree'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgThree'></div> */}
                                </div>
                                <div style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png)`}} className='gameHighlighted bigGameHiglightOne'>
                                    <div className='gameHighlitedDecoration'></div>
                                    {/* <div className='tourneamentHighlitedImgOne'></div> */}

                                </div>
                                <div style={{backgroundImage: `url(https://files.meiobit.com/wp-content/uploads/2014/04/20140425hearthstone-000.jpg)`}} className='gameHighlighted bigGameHiglightTwo'>
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
                        index = 8   
                        currentPage = 'pageTwo'
                        callPageChanger()
                        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberTwo"></div>
                <div onClick={() => {
                        index = 16
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