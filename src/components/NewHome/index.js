import react, { useEffect, useState, useRef } from 'react'
import Navbar from "../Navbar"
import './index.css'


export default function NewHome () {
    const [currentPage, setCurrentPage] = useState('pageOne')
    let pageOne = useRef(null)
    let pageTwo = useRef(null)
    let pageThree = useRef(null)

    useEffect(() => {
        switch(currentPage){
            case 'pageOne':
                
                break
            case 'pageTwo':
                break
            case 'pageThree':
                break
        }   
    })

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
                                <label className='labelAskingPageOneHome'>
                                    <label>Ficou interessado em um desses eventos? </label>
                                    <label>Faça um <a href='./login'>login agora</a> e dê uma olhada nos torneios de várias modalidades e jogos na plataforma!</label>
                                </label>
                            </div>
                        </div>
                        <div className="containerPageTwoHomeContent" >
                            <input className='inputIscaTwo' ref={pageTwo}></input>
                        
                            <label className="labelPageOneHome">OLHA SÓ, FUNCIONOU</label>
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
                                <label className='labelAskingPageOneHome'>
                                    <label>Ficou interessado em um desses eventos? </label>
                                    <label>Faça um <a href='./login'>login agora</a> e dê uma olhada nos torneios de várias modalidades e jogos na plataforma!</label>
                                </label>
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
                <div onClick={() => pageTwo.current.focus()} className="pageSelector pageNumberOne"></div>
                <div className="pageSelector pageNumberTwo"></div>
                <div className="pageSelector pageNumberThree"></div>
            </div>
        </div>
    )
}