import React from 'react'
import './index.css'

export default function Navbar() {
    return (
        <div>
            <div>
                <img src="./assets/branco.png" />
                <p>Início</p>
                <p>Jogos</p>
                <p>Feed</p>
                <p>Sobre</p>
            </div>
            <div>
                <img src="./assets/branco.png" />
                <button>Entrar</button>
                <button>Cadastre-se</button>
            </div>
        </div>
    )
}