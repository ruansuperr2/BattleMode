import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    const data = new Date()
    let ano = data.getFullYear()



    return (
        <div className="divContainerFooter">
            <div className="divDividerFooter">
                <div className="divLeftFooter">
                    <a href="https://github.com/MonoDryad/BattleMode">
                        <div className="divLeftSocialContainers">
                            <GitHubIcon color="white" sx={{ fontSize: 50 }} />
                            <p>Acesse o nosso GitHub</p>
                        </div>
                    </a>
                    <a href="https://twitter.com/gaiacup">
                        <div className="divLeftSocialContainers">
                            <TwitterIcon color="white" sx={{ fontSize: 50 }} />
                            <p>Acesse o nosso Twitter</p>
                         </div>
                    </a>
                    <a href="https://github.com/MonoDryad/BattleMode">
                        <div className="divLeftSocialContainers">
                            <img src={require("./assets/discord.png")} />
                            <p>Acesse o nosso Discord</p>
                        </div>
                    </a>
                </div>
                <div className="divMiddleFooter">
                    <img className="imgLogo" src={require("./assets/logo.png")} />
                </div>
                <div className="divRightFooter">
                    <Link to="/" className="fontFooter">Início</Link>
                    <Link to="/feed" className="fontFooter">Feed</Link>
                    <Link to="/games" className="fontFooter">Jogos</Link>
                    <Link to="/about" className="fontFooter">Sobre</Link>
                </div>
            </div>
            <div className="divNotAffiliated">
                <p>This competition is not affiliated with or sponsored by Riot Games, Inc. or League of Legends Esports.</p>    
                <p>©{ano}: Inexorabilis Team</p>
            </div>
               
        </div>
    )
}