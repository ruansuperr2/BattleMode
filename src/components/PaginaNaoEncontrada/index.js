import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="divMainContainer">
            <p>Não encontramos essa página, se você estiver perdido, <Link to="/">retorne para a Home.</Link></p>

        </div>
        )
}

export default Home