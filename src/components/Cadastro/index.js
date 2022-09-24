import React, {useState} from 'react'
import './index.css'

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

function Cadastro () {

    const [users, setUsers] = useState()
    const icon = `https://raw.communitydragon.org/12.18/game/assets/ux/summonericons/profileicon${Math.floor(Math.random() * 5000)}.png`
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const getUsers = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/user')
            const data = response.json()
            console.log(data)
            data.then(
                (val) => setUsers(val.data)
            )
        }catch(error){
            console.log(error)
        }
   }

   
   const registerUser = () => {
        getUsers()
        console.log('USUÁRIOS > ',users)
        if(email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)){
            if(password == confirmPassword){
                setTimeout(async () => {
                    alert('correto1')
                    
                    try{
                        const requestOptions = {
                             method: 'POST',
                             headers: {'Content-type': 'application/json'},
                             body: JSON.stringify({
                                username: username,
                                email: email,
                                icon: icon,
                                password: password,
                             })
                             
                        }
                        await fetch('http://localhost:3000/api/user',  requestOptions)
                        setTimeout(() => {
                            window.location.href = './login '
                        }, 300)
                    }catch(error){
                            console.log(error)
                    }
                }, 600)
            }else{
                alert('errou2')
            }
        }else{
            alert('errou1')
        }
   }

    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
                <img src={require("./assets/logo.png")} />
                <h1>Sua escalada começa aqui</h1>
                <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>

                <div className='divIconsRedesLogin'>
                    <GitHubIcon sx={{fontSize: "8vh", color: "#fc6b03"}}></GitHubIcon>
                    <TwitterIcon  sx={{fontSize: "8vh", color: "#fc6b03"}} ></TwitterIcon>
                     <img className="discord" src={require("./assets/discord.png")}></img>
                </div>
            </div>
            <div className="divLoginRightContainer">
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
        )
}

export default Cadastro