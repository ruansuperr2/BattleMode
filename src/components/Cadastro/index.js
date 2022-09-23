import React from 'react'
import './index.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Login() {
    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
                <img src={require("./assets/logo.png")} />
                <h1>Sua escalada começa aqui</h1>
                <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>

                <div className='divIconsRedesLogin'>
                    <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                    <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                     <img className="discord" src={require("./assets/discord.png")}></img>
                </div>
            </div>
            <div className="divLoginRightContainer">
                <div className='divCadastrarRightSubContaner'>
                    <h1>Cadastre-se</h1>
                    <p className='p'>Entre com sua conta ja cadastrada</p>

                    <input placeholder='Usuário'></input>
                    <input placeholder='Email'></input>
                    <input placeholder='Senha'></input>
                    <input placeholder='Confirmar senha'></input>
                    <button>Cadastrar-se</button>


                </div>
            </div>
        </div>
        )
}

export default Login