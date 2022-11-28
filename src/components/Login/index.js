import React, { useState } from 'react'
import './index.css'
import ModalCustom from '../Modal'
import { showModal, closeModal } from '../Modal'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SettingsRemoteTwoTone } from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

let getUsersTry = 0
function Login(props) {
    props.funcNav(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPass1, setShowPass1] = useState(null)

    const loggedUser = []
    const [users, setUsers] = useState([])
    
    const Login = () => {
        showModal('spin','Aguarde',false)
        if(users.find((account) => {return account.username === username }) != undefined){
            if(users.find((account) => {return password === account.password}) != undefined && users.find((account) => {return account.username === username }) != undefined){
                loggedUser.push(users.find((account) => {return account.username === username }))
                console.log(loggedUser)
                localStorage.setItem('dasiBoard', JSON.stringify(loggedUser[0].id))
                setTimeout(() => {
                    closeModal('success','Conectado! Você será redirecionado para a página principal.','barLoading')
                    window.location.href = './now '
                }, 600)
            }else{
                closeModal('erro','Credenciais incorretas','barLoading')
            }
        }else{
            closeModal('erro','Credenciais incorretas','barLoading')
        }
    }
    
    const callAgentFinder = async() => {
    
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/user')
            const data = response.json()
            data.then(
                (val) => {setUsers(val.data)
                    
                    console.log(username, password)
                    console.log(users.find((account) => {return account.username === username }))            
                    
                })
                console.log(users)
        }catch(error){
            console.log(error)
        }
    }

    if(getUsersTry < 10){
        getUsersTry++
        callAgentFinder()
    }

    return (
        <div className='divMainLoginLinda'>
            <div className="divLoginMainContainer">
                <ModalCustom/>
                <div className="divLoginLeftContainer">
                    <div>
                        <img className='IMG' src={require("./assets/logo.png")} />
                    </div>

                    <div>
                        <h1>A comunidade está a sua espera</h1>
                    </div>

                    <div>
                        <p>Jogadores, organizadores e fãs de todo o mundo juntos em uma única plataforma, você está pronto para mostra o que você é capaz?</p>
                    </div>

                    <div className='links'>
                        <a href="https://github.com/MonoDryad/BattleMode">
                            <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                        </a>

                        <a href="https://twitter.com/gaiacup">
                            <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                        </a>

                        <a href="">
                            <img className="discord" src={require("./assets/discord.png")}></img>
                        </a>
                    </div>
                </div>
                <div className="divLoginRightContainer">
                    <div className='divLoginRightSubContaner'>
                        <h1>Entrar</h1>
                        <p className='p'>Entre com sua conta ja cadastrada</p>

                        <input value={username} onChange={event => {setUsername(event.target.value)}} placeholder='Usuário'></input>
                        <label>
                            <input type='password' id='1' value={password} onChange={event => {setPassword(event.target.value)}} placeholder='Senha'></input>
                            { !showPass1 &&
                                <VisibilityIcon onClick={() => {setShowPass1('view')
                                document.getElementById('1').setAttribute("type", "text")
                            }} className='aVIMG' sx={{fontSize: "4vh", color: "#fc6b03"}} ></VisibilityIcon>
                            }
                                                        
                            { showPass1 &&
                                <VisibilityOffIcon onClick={() => {setShowPass1(null)
                                document.getElementById('1').setAttribute("type", "password")
                                }} className='aVIMG' sx={{fontSize: "4vh", color: "#fc6b03"}} ></VisibilityOffIcon>
                            }
                        </label>                        
                        <button onClick={() => Login()}>Entrar</button>

                        <a href='/cadastro'><p>Esqueceu sua senha?</p></a>
                        <a href='/cadastro'><p>Não possui conta?</p></a>
                    </div>
                </div>
            </div>
        </div>
        )
}

export default Login