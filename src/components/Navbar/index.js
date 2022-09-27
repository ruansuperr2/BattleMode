import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import LanguageIcon from '@mui/icons-material/Language';


export const Navbar = (props) => {
    const [find, setFind] = useState()
    let loggedUser = {}
    const getLogged = async() => {
        if(find == undefined){
            try{
                const response = await fetch('http://localhost:3000/api/user')
                const data = response.json()
                data.then(
                    (val) => {
                        let userContent = val.data.find((account) => {return account.id === JSON.parse(localStorage.getItem('dasiBoard')) })
                        loggedUser = userContent
                        setFind(1)
                        console.log(find)
                        loggedUser.logged = true
                        console.log(loggedUser)
                        if(loggedUser.logged === true){
                            document.querySelector('.loggedUserNameNavBar').style.display = 'block'
                            document.querySelector('.EntrarRegistroNavBar').style.display = 'none'
                            document.querySelector('.userNameP').textContent = loggedUser.username 
                            document.querySelector('.imgIconP').setAttribute("src", loggedUser.icon)
                        }else{
                            document.querySelector('.loggedUserNameNavBar').style.display = 'none'
                            document.querySelector('.EntrarRegistroNavBar').style.display = 'block'
                        }
                    }
                )
            }catch(error){
                
                console.log(error)
            }
        }
    }

    
    let getOpenedNavbar
    getLogged(find)

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
                <Link to="/now" className="fontNavbar"><HomeIcon sx={{color: "#fff", fontSize: 35}}/>Home</Link>
                <Link to="/feed" className="fontNavbar"><EmojiEventsIcon sx={{color: "#fff", fontSize: 35}}/>Torneios</Link>
                <Link to="/games" className="fontNavbar"><SportsEsportsIcon sx={{color: "#fff", fontSize: 35}}/>Jogos</Link>
                <Link to="/about" className="fontNavbar"><InfoIcon sx={{color: "#fff", fontSize: 35}}/>Sobre</Link>
            </div>
            <div className="divRightNavbar">
                <p><LanguageIcon className="LanguageIcon" sx={{color: "#fff", fontSize: 35}}/> pt-br</p>
                

            </div>

            <div className={`divSideLoginRegister ${navbar && "navbarActive"}` }>
                <div className='EntrarRegistroNavBar'>
                    <button>Cadastrar-se </button>
                    <button>Entrar</button>
                </div>
                <div className='loggedUserNameNavBar'>
                    
                    <img className='imgIconP'/>
                    <p className='userNameP'></p>
                    <div onClick={() => {
                                    if(document.querySelector('.buttonShowMoreNavbar').classList.contains('buttonShowMoreNavbarActivated')){
                                        document.querySelector('.buttonShowMoreNavbar').classList.remove('buttonShowMoreNavbarActivated')
                                        document.querySelector('.NavbarDropDown').classList.add('showBlockAnimation')
                                        setTimeout(() =>{
                                            document.querySelector('.NavbarDropDown').classList.remove('showBlockAnimation')
                                            
                                        },500)
                                    }else{
                                        document.querySelector('.buttonShowMoreNavbar').classList.add('buttonShowMoreNavbarActivated')
                                        document.querySelector('.NavbarDropDown').style.display = 'block'
                                        document.querySelector('.NavbarDropDown').classList.remove('showBlockAnimation')
                                        document.querySelector('.NavbarDropDown').classList.add('showBlockAnimation')
                                        setTimeout(() =>{
                                            document.querySelector('.NavbarDropDown').classList.remove('showBlockAnimation')
                                            
                                        },500)
                                        
                                    }
                                }
                            }
                        className='buttonShowMoreNavbar'/>
                </div>
                    <div className="NavbarDropDown">
                            <p>testestestestestestes</p>
                            <p>testestestestestestes</p>
                            <p>testestestestestestes</p>
                            <p>testestestestestestes</p>
                            <p>testestestestestestes</p>    
                    </div>
            </div>
        </div>
    )
}

export default Navbar