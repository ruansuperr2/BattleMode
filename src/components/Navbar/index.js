import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import { cleanup } from '@testing-library/react';

export default function Navbar(props) {

    const [navbar, setNavbar] = useState(false);

    const changeNoneButtons = () =>{
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    useEffect(() =>{
        window.addEventListener("scroll", changeNoneButtons)
        return () => {
            window.removeEventListener("scroll", changeNoneButtons)
        }
    }, [])



    return (
        <div className="divDividerNavbar">
            <div className="divLeftNavbar">
                <img src={require("./assets/logo.png")} />
                <hr className="HR"/>
                <Link to="/home" className="fontNavbar"><HomeIcon sx={{color: "#fff", fontSize: 35}}/></Link>
                <Link to="/feed" className="fontNavbar"><EmojiEventsIcon sx={{color: "#fff", fontSize: 35}}/></Link>
                <Link to="/games" className="fontNavbar"><SportsEsportsIcon sx={{color: "#fff", fontSize: 35}}/></Link>
                <Link to="/about" className="fontNavbar"><InfoIcon sx={{color: "#fff", fontSize: 35}}/></Link>
            </div>
            <div className="divRightNavbar">
                <p><LanguageIcon className="LanguageIcon" sx={{color: "#fff", fontSize: 35}}/> pt-br</p>
                

            </div>

            <div className={`divSideLoginRegister ${navbar && "navbarActive"}` }>
                <button>Cadastrar-se </button>
                <button>Entrar</button>
            </div>
        </div>
    )
}