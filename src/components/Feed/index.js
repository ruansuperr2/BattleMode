import React, {useState} from 'react'
import './index.css'
import Prediletos from './components/Prediletos'
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar'
import Footer from '../Footer'
import TodosTorneios from './components/TodosTorneios'

function Feed() {
    const { id } = useParams();
    
    let getGamesTry = 0
    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/jogo')
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
    }

    if(id === undefined){
        return (
            <div className="divMainContainer">
                <Navbar page="feed"/>
                <div className='paddingLeft divMainFeedContainer'>
                    <h1 className='TitlePrediletos'>Seus Favoritos</h1>
                    <Prediletos/>

                        { jogo.map( (jogo) => 
                        <div>
                            <h1 className='TitlePrediletos'>{jogo.nome}</h1>
                            <TodosTorneios id={jogo.id}/>
                        </div>
                        ) }
                    <Footer/>
                </div>
            </div>
        )
    }else{
        return (
            <div className="divMainContainer">
                <Navbar page="feed"/>
                    <div>
                        
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Feed