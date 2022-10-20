import React from 'react'
import './index.css'
import 'animate.css';


import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function LandingPage() {
    if(JSON.parse(localStorage.getItem('dasiBoard')) !== null){
        window.location.href = './now'
    }
    return (
        <div className='divMainLanding'>
            <div className='divMainLandingPageNavbar'>
                <button onClick={() => {window.location.href = "./login"}} className="buttonNavbar">Entrar</button>
                <button onClick={() => {window.location.href = "./cadastro"}} className="buttonNavbar">Cadastrar-se</button>
            </div>
            <div className='divDivisaoTelasLandingPage'>
                <div className='divImgInfoLandingPage'>
                    <img className='logo' src={require("./assets/logo.png")}></img>
                    <h1 classNome = 'h1_Animate'>Sua escalada começa aqui</h1>
                    <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>
                    <button onClick={() => {window.location.href = "./now"}}>Começar</button>

                    <div className='divIconsRedesLandingPage'>
                        <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                        <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                        <img className='discord' src={require("./assets/discord.png")}></img>
                    </div>
                </div>
                <div className='divVideoLandingPage'>
                    <video loop autoPlay={true} muted src={require('./assets/video.webm')} type='video/webm'>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default LandingPage