import React, { useState } from 'react'
import './index.css'
import swal from 'sweetalert'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loggedUser = []
    const [users, setUsers] = useState([])

    const callAgentLogin = async () => {
        
        try{
            const response = await fetch('http://localhost:3000/api/user')
            const data = response.json()
            data.then(
                (val) => setUsers(val.data)
            )
            console.log(users)
            setTimeout(() => {
                
                console.log(username, password)
                console.log(users.find((account) => {return account.username === username }))
                if(users.find((account) => {return account.username === username }) != undefined){
                    if(users.find((account) => {return password === account.password}) != undefined && users.find((account) => {return account.username === username }) != undefined){
                        loggedUser.push(users.find((account) => {return account.username === username }))
                        console.log(loggedUser)
                        localStorage.setItem('dasiBoard', JSON.stringify(loggedUser[0].id))
                        setTimeout(() => {
                            swal("Tudo certo", "Você logou com sucesso", "success");
                            window.location.href = './now '
                        }, 600)
                    }else{
                        swal("Algo deu errado", "Verifique suas credenciais", "error");
                    }
                }else{
                    swal("Algo deu errado", "Verifique suas credenciais", "error");
                }
            }, 700)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
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
            <div className="divLoginRightContainer">
                <div className='divLoginRightSubContaner'>
                    <h1>Entrar</h1>
                    <p className='p'>Entre com sua conta ja cadastrada</p>

                    <input value={username} onChange={event => {setUsername(event.target.value)}} placeholder='Usuário'></input>
                    <input value={password} onChange={event => {setPassword(event.target.value)}} type='password' placeholder='Senha'></input>
                    <button onClick={() => callAgentLogin()}>Entrar</button>

                    <a><p>Esqueceu sua senha?</p></a>
                    <a><p>Não possui conta?</p></a>
                </div>
            </div>
        </div>
        )
}

export default Login