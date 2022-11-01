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

let getUsersTry = 0
export const Navbar = (props) => {
    const [loggedUser, setLoggedUser] = useState({})
    const getUsers = async () => {
        try{
            if(JSON.parse(localStorage.getItem('dasiBoard') !== null)){

                const responseUser = await fetch('http://localhost:3000/api/user/' + JSON.parse(localStorage.getItem('dasiBoard')))
                const dataUser = responseUser.json()
                dataUser.then(
                    (val) => {
                        setLoggedUser(val.data)
                        
                    }
                )
            }
            if(props.page !== 'usuario'){
                console.log('Não é igual ao usuário')
                console.log('Teste definitivo: ', loggedUser.username !== undefined && props.page != 'usuario')
                if(loggedUser.username !== undefined && props.page != 'usuario'){
                    document.querySelector('.loggedUserNameNavBar').style.display = 'flex'
                    document.querySelector('.EntrarRegistroNavBar').style.display = 'none'
                    document.querySelector('.userNameP').textContent = loggedUser.username 
                    document.querySelector('.imgIconP').setAttribute("src", loggedUser.icon)
                }else{
                    document.querySelector('.loggedUserNameNavBar').style.display = 'none'
                    document.querySelector('.EntrarRegistroNavBar').style.display = 'flex'
                }
            }else{
                document.querySelector('.divSideLoginRegister').style.display = 'none'
            }
        }catch(e){
        }
    }
        
    if(getUsersTry < 10){
        getUsersTry++
        getUsers()
        console.log('Entrou?')
    }
    

    // const [navbar, setNavbar] = useState(false);
    
    // const changeNoneButtons = () =>{
    //     if(window.scrollY >= 80){
    //         setNavbar(true)
    //     }else{
    //         setNavbar(false)
    //     }
    // }
    // useEffect(() =>{    
        
        
    //     window.addEventListener("scroll", changeNoneButtons)
    //     return () => {
    //         window.removeEventListener("scroll", changeNoneButtons)
    //     }
    // }, [])
    
    const callShowHeader = () =>{
        
        if(document.querySelector('.buttonShowMoreNavbar').classList.contains('buttonShowMoreNavbarActivated')){
            document.querySelector('.buttonShowMoreNavbar').classList.remove('buttonShowMoreNavbarActivated')
            document.querySelector('.NavbarDropDown').style.display = 'none'
        }else{
            document.querySelector('.buttonShowMoreNavbar').classList.add('buttonShowMoreNavbarActivated')
            document.querySelector('.NavbarDropDown').style.display = 'flex'

            
        }
        
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
        <div className="divDividerNavbar">
            <div className="divLeftNavbar">
                <Link to="/now" className="fontNavbar"><HomeIcon className='iconHome' sx={{color: defaultColorHome, fontSize: 35}}/>Home</Link>
                <Link to="/feed" className="feedLinkDetector fontNavbar"><EmojiEventsIcon className='iconTorneios' sx={{color: defaultColorTorneios, fontSize: 35}}/>Torneios</Link>
                <Link to="/games" className="fontNavbar"><SportsEsportsIcon className='iconJogos' sx={{color: defaultColorJogos, fontSize: 35}}/>Jogos</Link>
                <Link to="/about" className="fontNavbar"><InfoIcon className='iconAbout' sx={{color: defaultColorAbout, fontSize: 35}}/>Sobre</Link>
            </div>
            <div className="divRightNavbar">
                <p><LanguageIcon className="LanguageIcon" sx={{color: "#fff", fontSize: 35}}/> pt-br</p>
                

            </div>

            <div className={`divSideLoginRegister` }>
                <img src={require("./assets/logo.png")} />
                <div className='loggedUserNameNavBar'>
                    <img className='imgIconP'/>
                    <p className='userNameP'></p>
                    <div onClick={() => callShowHeader()} className='buttonShowMoreNavbar'/>
                </div>


                <label onClick={() => {window.location.href = `/u/${loggedUser.username}`}}><div className='imgNavbarUserGo'/> Perfil</label>
                <label onClick={() => {window.location.href = `/t/criar`}}><div className='imgNavbarTeamGo'/> Criar Equipe</label>
                <label onClick={() => {window.location.href = `/criarTorneio`}}><div className='imgNavbarTourneamentGo'/> Criar Torneio</label>
                <label onClick={() => {
                    localStorage.clear('dasiBoard')
                    window.location.reload(true)
                }}><div className='imgNavbarTourneamentGo'/> Desconectar</label>
                <div className='EntrarRegistroNavBar'>
                    <button onClick={() => {window.location.href = './cadastro'}}>Cadastrar-se </button>
                    <button onClick={() => {window.location.href = './login'}}>Entrar</button>
                </div>

            </div>
        </div>
    )
}

export default Navbar