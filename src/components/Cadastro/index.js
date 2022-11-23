import React, {useState} from 'react'
import './index.css'
import ModalCustom ,{ showModal, closeModal } from '../Modal';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Cadastro (props) {
    props.funcNav(false);
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const callAgentFinder = async() => {
        try{
            const response = await fetch('https://web-production-8ce4.up.railway.app/api/user')
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
        if(email.match(/([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g) && email !== users.find((account) => {return account.email === email })){
            console.log('> ', username.match(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/))
            if(username.match(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/) && username !== users.find((account) => {return account.username === username })){
                if(password === confirmPassword && password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
                    closeModal('success','Você será redirecionado para o loading!','barLoading')
                    
                    try{
                        const requestOptions = {
                                method: 'POST',
                                headers: {'Content-type': 'application/json'},
                                body: JSON.stringify({
                                    username: username,
                                    icon: `https://raw.communitydragon.org/12.18/game/assets/ux/summonericons/profileicon${Math.floor(Math.random() * 5000)}.png`,
                                    email: email,
                                    password: password,
                                    twitter: 'não possui',
                                    instagram: 'não possui',
                                    discord: 'não possui',
                                    twitch: 'não possui',
                                    biografia: `Olá, eu sou **novo por aqui**!`,
                                    status: 'Básico',
                                    corP: `#fc6b03`,
                                    corS: `#fc6b03`,
                                    favoritados: '',
                                    conquistas: '',
                                    imgFundo: 'https://img.freepik.com/free-photo/cosmic-background-with-colorful-laser-lights-perfect-digital-wallpaper_181624-23742.jpg?w=1380&t=st=1667843115~exp=1667843715~hmac=ac8ceacc27578dda2b42433d247fa3bda733299c3ffa75183b6ae0e9e1ad5d1b',
                                    imgFundoDois: 'null',
                                    dataCriacao: new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear()
                                })
                                
                        }
                        await fetch('https://web-production-8ce4.up.railway.app/api/user',  requestOptions)
                        setTimeout(() => {
                            window.location.href = '/login '
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
                    </div>

                    <div>
                        <h1>Sua escalada começa aqui!</h1>
                    </div>

                    <div>
                        <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade</p>
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
