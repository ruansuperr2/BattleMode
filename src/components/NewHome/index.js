import React, { useEffect, useState, useRef } from 'react'
import Navbar from "../Navbar"
import './index.css'


export default function NewHome () {
    const [currentPage, setCurrentPage] = useState('')
    const [index, setIndex] = useState(0)
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

    useEffect(() => {
        window.addEventListener("wheel", (event) => {
            console.log(event)
            if(event.deltaY === 100){
                if(index === 10){
                    setIndex(10)
                }else{
                    setIndex(index + 1)   
                    
                }
            }else if(event.deltaY === -100){
                if(index === 0){
                    setIndex(0)
                }else{
                    setIndex(index - 1)    
                }
            }
            console.log(index)
            if(index === 0){
                setCurrentPage('pageOne')
                document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 50)
            }else if(index === 4){
                setCurrentPage('pageTwo')
                document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
            }else if(index === 8){
                setCurrentPage('pageThree')
                document.querySelector('.containerPageThreeHomeContent').scrollIntoView({
                    behavior: 'smooth'
                }, 500)
            }
        })
        
    })

    callPageChanger()

    return(
        <div className="containerNewHome">
            <Navbar/>
            <div className="paddingLeft containerNewHome">
                <div>
                    <div className="containerPageOneHome">
                        <div className="containerPageOneHomeContent">
                        
                            <label className="labelPageOneHome">FIQUE DE OLHO NOS PRÓXIMOS TORNEIOS</label>
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
                            <label className='labelAskingPageOneHome'>
                                <label>Ficou interessado em um desses eventos? </label>
                                <label>Faça um <a href='./login'>login agora</a> e dê uma olhada nos torneios de várias modalidades e jogos na plataforma!</label>
                            </label>
                        </div>
                        <div className='containerDivider'/>
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
                        <div className='containerDivider'/>
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
                        setIndex(0)
                        setCurrentPage('pageOne')
                        callPageChanger()
                        document.querySelector('.containerPageOneHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberOne currentPageHome"></div>
                <div onClick={() => {
                        setIndex(4)
                        setCurrentPage('pageTwo')
                        callPageChanger()
                        document.querySelector('.containerPageTwoHomeContent').scrollIntoView({
                            behavior: 'smooth'
                        }, 500)
                    }} className="pageSelector pageNumberTwo"></div>
                <div onClick={() => {
                        setIndex(8)
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