import React, { useEffect, useState, useRef } from 'react'
import Navbar from "../Navbar"
import './index.css'

import $ from 'jquery'

let index = 0

export default function NewHome () {
    const [currentPage, setCurrentPage] = useState('')
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
    const pageHandling = (funcProp) => {
        if(funcProp === 0){
            setCurrentPage('pageOne')
            document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                behavior: 'smooth'
            }, 500)
        }else if(funcProp === 8){
            $('.labelPageTwoHome').text('CHUPA MINHA PIKA')
            setCurrentPage('pageTwo')
            document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                behavior: 'smooth'
            }, 500)
        }else if(funcProp === 16){
            setCurrentPage('pageThree')
            document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
                behavior: 'smooth'
            }, 500)
        }
    }

    useEffect(() => {
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
    callPageChanger()

    return(
        <div className="containerNewHome">
            <Navbar/>
            <div className="paddingLeft containerNewHome">
                <div>
                    <div className="containerPageOneHome">
                        <div className="containerPageOneHomeContent">
                        
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
                                <label>Faça um <a href='./login'>login agora</a> e dê uma olhada nos torneios de várias modalidades e jogos na plataforma!</label>
                            </label>
                        </div>
                        <div className='containerDivider containerTwoDivider'/>
                        <div className="containerPageTwoHomeContent" >
                            
                        
                            <label className="labelPageTwoHome">OLHA SÓ, FUNCIONOU</label>
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
                        <div className='containerDivider containerThreeDivider'/>
                        <div className="containerPageThreeHomeContent" >
                            
                        
                            <label className="labelPageThreeHome">CARALHOU SÓ, FUNCIONOU</label>
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
                        setCurrentPage('pageOne')
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
                        setCurrentPage('pageTwo')
                        callPageChanger()
                        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberTwo"></div>
                <div onClick={() => {
                        index = 16
                        setCurrentPage('pageThree')
                        callPageChanger()
                        document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberThree"></div>
            </div>
        </div>
    )
}