import React, {useState} from 'react'
import './index.css'
import Prediletos from './components/Prediletos'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar'
import Footer from '../Footer'
import TodosTorneios from './components/TodosTorneios'
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
            console.log(error)
        }
    }

    
    
    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
            console.log(error)
        }
    }

    if(getGamesTry < 10){
        getGamesTry++
        callGames()
        callTorneio()
    }

    if(id === undefined){
        return (
            <div className="divMainContainerD">
                {/* <Navbar page="torneio"/> */}
                <div className='paddingLeft divMainFeedContainer'>
                        { jogo.map( (jogo) => 
                        <div className='divGamesonFeedContainer'>
                            <h1 className='TitlePrediletos'><img className='logoImgFeedGlobal' src={jogo.logo}/>  {jogo.nome}</h1>
                            <TodosTorneios id={jogo.id}/>
                        </div>
                        ) }
                    <Footer/>
                </div>
            </div>
        )
    }else{
        return (
            <div className="divMainContainerD">
                <div className='pagewrap'>
                    <div className='containerThisGame paddingLeft'>
                        {
                            jogo.map( (findJogo) => {
                                console.log(parseInt(findJogo.gameId), parseInt(id))
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
                                    console.log(parseInt(findTorneio.gameId), parseInt(id))
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
