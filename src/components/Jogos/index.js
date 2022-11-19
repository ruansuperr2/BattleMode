import React, { useState } from 'react'
import Footer from '../Footer'
import './index.css'
import ModalCustom, {showModal, closeModal} from '../Modal'

const gamesAdded = []
let getGamesTry = 0
function Jogos() {
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
            document.querySelector('.addButton').style.opacity = '0%'
        }
    }


    const [jogo, setJogo] = useState([])
    const callGames = async() => {
        try{
            const response = await fetch('https://battlemode-backend.herokuapp.com/api/jogo')
            const data = response.json()
            data.then(
                (val) => {setJogo(val.data)})
        }catch(error){
            console.log(error)
        }
    }

    const callHtmlGames = () => {
        console.log(jogo)
    }

    if(getGamesTry < 10){
        getUsers()
        getGamesTry++
        gamesAdded.pop()
        callGames()
        if(getGamesTry === 9){
            callHtmlGames()
            gamesAdded.push(JSON.parse(loggedUser.favoritados))
        }
    }

    const callAddNewGame = async(e) => {
        console.log(e)
        console.log(gamesAdded)
        gamesAdded.push(e)
        document.querySelector(`#add${e}`).style.display = 'none'
        console.log(gamesAdded)
        showModal('loading','Atualizando o Banco','barLoading')
                    
        try{
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({
                    username: loggedUser.username,
                    icon: loggedUser.icon,
                    email: loggedUser.email,
                    password: loggedUser.password,
                    twitter: loggedUser.twitter,
                    instagram: loggedUser.instagram,
                    discord: loggedUser.discord,
                    twitch: loggedUser.twitch,
                    biografia: loggedUser.biografia,
                    status: loggedUser.status,
                    corP: loggedUser.corP,
                    corS: loggedUser.corS,
                    favoritados: JSON.stringify(gamesAdded),
                    conquistas: loggedUser.conquistas,
                    imgFundo: loggedUser.imgFundo,
                    imgFundoDois: loggedUser.imgFundoDois,
                    dataCriacao: loggedUser.dataCriacao
                })
                
            }
            closeModal('success', 'atualizado!',null)
            await fetch('https://battlemode-backend.herokuapp.com/api/user/' + loggedUser.id,  requestOptions)
            }catch(e){
                console.log(e)
            }
    }


    return (
        <div>
            <ModalCustom></ModalCustom>
            <div className="paddingLeft divMainJogos">
                <h3 className="titleGames">O maior show de competição!</h3> 
                <h4 className='titleGames2'>Adicione o seu jogo favorito ao seu perfil!</h4>
                <div className="divJogosMainContainer">
                    { jogo.map( (jogo) => 
                        <div key={jogo.id} className='divJogosSubContainer' id={jogo.id}>
                            <div className='divJogosContainer'>
                                <img className='divJogosImg' src={jogo.imgFundo}/>
                                <div className='nomeDescricao'>
                                    <div className="addButton" id={'add' + jogo.id} onClick={(e) => callAddNewGame(jogo.id)}/>
                                    <h5>{jogo.nome}</h5>
                                    <p>{jogo.descricaoLonga}</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
                <Footer/>
            </div>
        </div>
        )
}

export default Jogos