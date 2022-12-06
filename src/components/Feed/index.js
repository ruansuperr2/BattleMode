import React, {useState, useRef } from 'react'
import './index.css'
import Prediletos from './components/Prediletos'
import { useParams } from 'react-router-dom';
import Loading from '../Loading'
import Navbar from '../Navbar'
import Footer from '../Footer'
import TodosTorneios from './components/TodosTorneios'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'



let getGamesTry = 0
function Feed() {
    const { id } = useParams();

    const [torneio, setTorneio] = useState([])
    const callTorneio = async() => {
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/torneio')
            const data = response.json()
            data.then(
                (val) => {setTorneio(val.data)})
        }catch(error){
        }
    }

    const carousel = useRef(null)
    const [cooldown, setCooldown] = useState('')

    const handleLeftClick = e => {
        setCooldown('disabled')
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth -14
        setTimeout(() => {
            setCooldown('')
        }, 550);
    }

    const handleRightClick = e => {
        e.preventDefault()
        setCooldown('disabled')

        carousel.current.scrollLeft += carousel.current.offsetWidth -14
        setTimeout(() => {
            setCooldown('')
        }, 550);
    }
    
    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
        }
    }

    if(getGamesTry < 3){
        getGamesTry++
        callGames()
        callTorneio()
    }

    if(id === undefined){
        return (
            <div className="divMainContainerD">
                <Loading/>
                {/* <Navbar page="torneio"/> */}
                <div className='paddingLeft divMainFeedContainer'>
                        { jogo.map( (jogo) => 

                        <div className='divGamesonFeedContainer'>
                            <h1 className='TitlePrediletos'><img className='logoImgFeedGlobal' src={jogo.logo}/>  {jogo.nome}</h1>
                            <div className='torneioSetasMainContainer'>
                                <div className='torneioContainer' ref={carousel}>
                                    { torneio.map( (findTorneio) => {
                                        if(jogo.id === findTorneio.gameId){
                                            return  <a key={findTorneio.id} href={`../t/${findTorneio.id}`} className='Torneio' style={{backgroundImage: `url(${findTorneio.thumbnail})`}}>
                                                        <h5 className='TorneioH1'>{findTorneio.nome}</h5>
                                                    </a>
                                                    
                                        }

                                    }

                                    ) }
                                </div>
                                <div className='containerTorneioSetas'>
                                    <button className='buttonSeta' onClick={handleLeftClick} disabled={cooldown}><AiOutlineArrowLeft/></button>
                                    <button className='buttonSeta' onClick={handleRightClick} disabled={cooldown}><AiOutlineArrowRight/></button>
                                </div>
                            </div>
                        </div>
                        ) }
                    <Footer/>
                </div>
            </div>
        )
    }else{
        return (
            <div className="divMainContainerD">
                <Loading/>
                <div className='pagewrap'>
                    <div className='containerThisGame paddingLeft'>
                        {
                            jogo.map( (findJogo) => {
                                if(parseInt(id) === parseInt(findJogo.id)){
                                    return <div className='divContainerThisGame'><h1><div className='gameDivLogo' style={{backgroundImage: `url(${findJogo.logo})`}}/>{findJogo.nome}</h1></div>

                                }      
                            })
                        } 
                    </div>
                    <div className='organizeList'>

                        <div className='containerSpecificGame paddingLeft'>
                            {
                                torneio.map( (findTorneio) => {
                                    if(parseInt(id) === parseInt(findTorneio.gameId)){
                                        return <div onClick={() => {window.location.href = `../t/${findTorneio.id}`}} key={findTorneio.id} style={{backgroundImage: `url(${findTorneio.thumbnail})`}} className='tourneamentHighlightedFeed bigTourneamentHiglightOne'>
            

                                        <label><img src={findTorneio.logo} alt='img'/>{findTorneio.nome}</label>
                                    </div>

                                    }      
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Feed
