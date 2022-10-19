import React, {useState} from 'react'
import './index.css'
import ModalCustom ,{ showModal, closeModal } from '../Modal';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Cadastro () {

    const [users, setUsers] = useState([])
    const icon = `https://raw.communitydragon.org/12.18/game/assets/ux/summonericons/profileicon${Math.floor(Math.random() * 5000)}.png`
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const callAgentFinder = async() => {
        try{
            const response = await fetch('http://localhost:3000/api/user')
            const data = response.json()
            data.then(
                (val) => {setUsers(val.data)

                    console.log(username, password)
                    console.log(users.find((account) => {return account.username === username }))            
                }
            )
            console.log(users)
        }catch(error){
            console.log(error)
        }
    }

    
    const registerUser = async() => {
        callAgentFinder()
        console.log('USUÁRIOS > ',users)
        showModal('spin','Aguarde',false)
        if(email.match(/([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g) && email != users.find((account) => {return account.email === email })){
            console.log('> ', username.match(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/))
            if(username.match(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/) && username != users.find((account) => {return account.username === username })){
                if(password === confirmPassword && password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
                    closeModal('success','Você será redirecionado para o loading!','barLoading')
                    
                    try{
                        const requestOptions = {
                                method: 'POST',
                                headers: {'Content-type': 'application/json'},
                                body: JSON.stringify({
                                    username: username,
                                    icon: icon,
                                    email: email,
                                    password: password
                                })
                                
                        }
                        await fetch('http://localhost:3000/api/user',  requestOptions)
                        setTimeout(() => {
                            window.location.href = './login '
                        }, 1000)
                    }catch(error){
                            console.log(error)
                    }
                }else{
                    closeModal('erro','Verifique a sua senha','barLoading')
                }

            }else{
                closeModal('erro','Preencha o campo de Usuário','barLoading')
            }
        }else{
            closeModal('erro','Esse email já esta em uso ou não uma formatação correta','barLoading')
        }
    }

    return (
        <div className='divMainCadastroLindo'>
            <div className="divCadastroMainContainer">
                <ModalCustom/>
                <div className="divCadastroLeftContainer">
                    <div>
                        <img src={require("./assets/logo.png")} />
                        <h1>Sua escalada começa aqui</h1>
                        <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>

                            <div className='links'>
                                <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                                <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                                <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                                {/* <img className="discord" src={require("./assets/discord.png")}></img> */}
                            </div>
                    </div>
                </div>
                <div className="divCadastroRightContainer">
                    <div className='divCadastrarRightSubContaner'>
                        <h1>Cadastre-se</h1>
                        <p className='p'>Entre com sua conta ja cadastrada</p>

                        <input value={username} onChange={event => {setUsername(event.target.value)}} placeholder='Usuário'></input>
                        <input value={email} onChange={event => {setEmail(event.target.value)}} placeholder='Email'></input>
                        <input value={password} onChange={event => {setPassword(event.target.value)}} placeholder='Senha'></input>
                        <input value={confirmPassword} onChange={event => {setConfirmPassword(event.target.value)}} placeholder='Confirmar senha'></input>
                        <button onClick={() => registerUser()}>Cadastrar-se</button>


                    </div>
                </div>
            </div>
        </div>
        )
}

export default Cadastro