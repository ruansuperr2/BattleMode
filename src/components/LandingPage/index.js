import React from 'react'
import './index.css'


import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function LandingPage() {
    return(
        <div className='divMainLanding'>
            <div className='divMainLandingPageNavbar'>
                <button className="buttonNavbar">Entrar</button>
                <button className="buttonNavbar">Cadastre-se</button>
            </div>

        <div className='divDivisaoTelasLandingPage'>

            <div className='divImgInfoLandingPage'>
            <img className='logo' src={require("./assets/logo.png")}></img>
                <h1>Titulo muito bom, kkkkk lek</h1>
                <p>O texto informativo é um texto em que o escritor expõe brevemente um tema, fato ou circunstância ao leitor. </p>
                <button>Começar</button>

                <div className='divIconsRedesLandingPage'>
        	        <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                    <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                    <img className='discord' src={require("./assets/discord.png")}></img>
                </div>
            </div>

            <div className='divVideoLandingPage'>
                {/* <video autoPlay={true} muted width="100%"  src={require('./assets/videoplayback.mp4')} type='video/mp4'>
                
                </video> */}

            </div>


        </div>
        
    
        </div>
    )
}

export default LandingPage