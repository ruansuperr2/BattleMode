import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';

let defaultColorHome = '#fff'
let defaultColorTorneios = '#fff'
let defaultColorJogos = '#fff'
let defaultColorAbout = '#fff'

let deadOrAlive = false
let getUsersTry = 0
export const Navbar = (props) => {
    let root = document.querySelector(':root')

    const [loggedUser, setLoggedUser] = useState({})
    const getUsers = async () => {
        try{
            if(JSON.parse(localStorage.getItem('dasiBoard') !== null)){

                const responseUser = await fetch('https://battlemode-backend.herokuapp.com/api/user/' + JSON.parse(localStorage.getItem('dasiBoard')))
                const dataUser = responseUser.json()
                dataUser.then(
                    (val) => {
                        setLoggedUser(val.data)
                        
                    }
                )
            }

        }catch(e){
            document.querySelector('.loggedUserNameNavBar').style.display = 'none'
            document.querySelector('.loggedUserFunctions').style.display = 'none'
            document.querySelector('.EntrarRegistroNavBar').style.display = 'flex'
            
        }
    }
        
    if(getUsersTry < 10){
        getUsersTry++
        getUsers()
        console.log('Entrou?')
    } 

    const makeEverythingWork = () => {
        if(props.page !== 'usuario'){
            console.log('Não é igual ao usuário')
            console.log('Teste definitivo: ', loggedUser.username !== undefined && props.page != 'usuario')
            if(loggedUser.username !== undefined && props.page != 'usuario'){
                document.querySelector('.loggedUserNameNavBar').style.display = 'flex'
                document.querySelector('.loggedUserFunctions').style.display = 'flex'
                document.querySelector('.EntrarRegistroNavBar').style.display = 'none'
                document.querySelector('.userNameP').textContent = loggedUser.username 
                document.querySelector('.imgIconP').setAttribute("src", loggedUser.icon)
                root.style.setProperty("--scrollbar-color", loggedUser.corS) 

            }else{
                document.querySelector('.loggedUserNameNavBar').style.display = 'none'
                document.querySelector('.loggedUserFunctions').style.display = 'none'
                document.querySelector('.EntrarRegistroNavBar').style.display = 'flex'
                root.style.setProperty("--scrollbar-color", '#fc6b03') 
            }
        }else{
            document.querySelector('.divSideLoginRegister').style.display = 'none'
        }
    }

    if(deadOrAlive === false){
        setTimeout(() => {
            
            makeEverythingWork()
        }, 1400);
    }

    if(props.page === 'home'){

        defaultColorHome = '#fc6b03'
        defaultColorTorneios = '#fff'
        defaultColorJogos = '#fff'
        defaultColorAbout = '#fff'
    }if(props.page === 'torneio'){
        defaultColorTorneios = '#fc6b03'
        defaultColorHome = '#fff'
        defaultColorJogos = '#fff'
        defaultColorAbout = '#fff'
    }if(props.page === 'jogo'){

        defaultColorTorneios = '#fff'
        defaultColorJogos = '#fc6b03'
        defaultColorAbout = '#fff'
        defaultColorHome = '#fff'
    }if(props.page === 'about'){

        defaultColorTorneios = '#fff'
        defaultColorJogos = '#fff'
        defaultColorHome = '#fff'
        defaultColorAbout = '#fc6b03'
    }
    
    return (
        <div className="">
            <div className="divDividerNavbar" style={{borderColor: `${loggedUser.corP}`}}>

                <div className="divLeftNavbar" style={{borderColor: `${loggedUser.corP}`}}>
                    <Link to="/now" className="fontNavbar"><HomeIcon className='iconNavbar iconHome' sx={{color: defaultColorHome, fontSize: 35}}/>Home</Link>
                    <Link to="/feed" className="feedLinkDetector fontNavbar"><EmojiEventsIcon className='iconNavbar iconTorneios' sx={{color: defaultColorTorneios, fontSize: 35}}/>Torneios</Link>
                    <Link to="/games" className="fontNavbar"><SportsEsportsIcon className='iconNavbar iconJogos' sx={{color: defaultColorJogos, fontSize: 35}}/>Jogos</Link>
                    <Link to="/about" className="fontNavbar"><InfoIcon className='iconNavbar iconAbout' sx={{color: defaultColorAbout, fontSize: 35}}/>Sobre</Link>
                </div>
                <div className="divRightNavbar" style={{borderColor: `${loggedUser.corP}`}}>
                    <p><LanguageIcon className="LanguageIcon" sx={{color: "#fff", fontSize: 35}}/> pt-br</p>
                    

                </div>
            </div>

            <div className={`divSideLoginRegister` } style={{borderBottomColor: `${loggedUser.corP}`}}>
                <img className='logoNavbar' src={require("./assets/logo.png")} style={{marginRight: '1rem'}} />


                <div className='loggedUserFunctions' style={{borderColor: `${loggedUser.corP}`}}>
                    <label onClick={() => {window.location.href = `/u/${loggedUser.username}`}}><div className='imgNavbarUserGo navbarGo'/> Perfil</label>
                    <label onClick={() => {window.location.href = `/criarEquipe`}}><div className='imgNavbarTeamGo navbarGo'/> Criar Equipe</label>
                    <label onClick={() => {window.location.href = `/criarTorneio`}}><div className='imgNavbarTourneamentGo navbarGo'/> Criar Torneio</label>
                    <label onClick={() => {
                        localStorage.clear('dasiBoard')
                        window.location.reload(true)
                    }}><div className='imgNavbarTourneamentGo navbarGo'/> Sair</label>
                </div>
                <div className='EntrarRegistroNavBar'>
                    <button onClick={() => {window.location.href = './cadastro'}}>Cadastrar-se </button>
                    <button onClick={() => {window.location.href = './login'}}>Entrar</button>
                </div>
                <div className='loggedUserNameNavBar'>
                    <img className='imgIconP' style={{borderColor: `${loggedUser.corP}`}}/>
                    <p className='userNameP'></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar