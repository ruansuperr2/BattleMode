import React from 'react'
import './index.css'
import Prediletos from './components/Prediletos'
import Navbar from '../Navbar'
import Footer from '../Footer'
import TodosTorneios from './components/TodosTorneios'

function Feed() {
    return (
        <div className="divMainContainer">
            <Navbar page="feed"/>
            <div className='paddingLeft divMainFeedContainer'>
                <h1 className='TitlePrediletos'>Seus Favoritos</h1>
                <Prediletos/>
                <h1 className='TitlePrediletos'>Descubra</h1>
                <TodosTorneios/>
                <Footer/>
            </div>
        </div>
        )
}

export default Feed