import React from 'react'
import './index.css'


import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function LandingPage() {
    return(
        <div className='divMainLanding'>
            <div className='divMainLandingPageNavbar'>
                <button className="buttonNavbar">Entrar</button>
                <button className="buttonNavbar">Cadastrar-se</button>
            </div>
            <div className='divDivisaoTelasLandingPage'>
                <div className='divImgInfoLandingPage'>
                    <img className='logo' src={require("./assets/logo.png")}></img>
                    <h1>Sua escalada começa aqui</h1>
                    <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>
                    <button>Começar</button>

                    <div className='divIconsRedesLandingPage'>
                        <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                        <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                        <img className='discord' src={require("./assets/discord.png")}></img>
                    </div>
                </div>
                <div className='divVideoLandingPage'>
                    <video loop autoPlay={true} muted width="100%"  src={require('./assets/video.mp4')} type='video/mp4'>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default LandingPage