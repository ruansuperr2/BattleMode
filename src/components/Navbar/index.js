import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export default function Navbar() {
    return (
        <div className="divDividerNavbar">
            <div className="divLeftNavbar">
                <img src={require("./assets/branco.png")} />
                <Link to="/" className="fontNavbar">Início</Link>
                <Link to="/feed" className="fontNavbar">Feed</Link>
                <Link to="/games" className="fontNavbar">Jogos</Link>
                <Link to="/about" className="fontNavbar">Sobre</Link>
            </div>
            <div className="divRightNavbar">
                <p>pt-br</p>
                <img src={require("./assets/worldImage.png")} />
                <button className="buttonPrimaryNavbar">Entrar</button>
                <button className="buttonSecundaryNavbar">Cadastre-se</button>
            </div>
        </div>
    )
}