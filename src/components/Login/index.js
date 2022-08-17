import React from 'react'
import './index.css'

function Login() {
    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
                <img src={require("./assets/branco.png")} />
            </div>
            <div className="divLoginRightContainer">
                <input />
                <input />
                <button>entrar</button>
            </div>
        </div>
        )
}

export default Login