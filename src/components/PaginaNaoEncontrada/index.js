import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="divMainContainer">
            <p>Oh não!! Não foi possivel encontrar essa página, <Link to="/">retorne para a Home</Link></p>

        </div>
        )
}

export default Home