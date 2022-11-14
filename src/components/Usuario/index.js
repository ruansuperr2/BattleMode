import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';
import ModalCustom, { showModal, closeModal } from '../Modal'
import Loading from '../Loading'

let getUsersTry = 0
let deadOrAlive = false
let stopIt = 0
function Usuario(){
    
    const { id } = useParams();
    console.log(id)

    const [loggedUser, setLoggedUser] = useState({})
    const [viewingUser, setViewingUser] = useState([])
    const [page, setPage] = useState('geral')
    const [jogo, setJogo] = useState([])
    const [torneio, setTorneio] = useState([])
    const [time, setTime] = useState([])

    const callTorneio = async() => {
        try{
            const response = await fetch('https://battlemode-backend.herokuapp.com/api/torneio')
            const data = response.json()
            data.then(
                (val) => {setTorneio(val.data)})
        }catch(error){
            console.log(error)
        }
    }

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

    const callTime = async () => {
        try{
            const responseUser = await fetch('https://battlemode-backend.herokuapp.com/api/time/')
            const dataTime = responseUser.json()

            dataTime.then(
                (val) => {
                    setTime(val.data)
                }
            )   
        }catch(error){
            console.log(error)
        }
    }

    const getUsers = async () => {
        try{
            const responseUser = await fetch('https://battlemode-backend.herokuapp.com/api/user/' + JSON.parse(localStorage.getItem('dasiBoard')))
            const dataUser = responseUser.json()

            const responseUsers = await fetch('https://battlemode-backend.herokuapp.com/api/user/')
            const dataUsers = responseUsers.json()
            dataUsers.then(
                (val) => {
                    setViewingUser(val.data.find((account) => {return account.username === id }))
                }
            )
            dataUser.then(
                (val) => {
                    setLoggedUser(val.data)
                }
            )   
        }catch(error){
            console.log(error)
        }
    }
    
    if(getUsersTry < 3){
        getUsersTry++
        getUsers()
        callGames()
        callTorneio()
        callTime()
    }
    useEffect(() => {
        
        switch(page){
            case 'geral':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.add('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'equipe':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.add('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'torneio':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'flex'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.add('perfilActive')
                document.querySelector('.config').classList.remove('perfilActive')
                break
            case 'config':
                document.querySelector('.divUsuarioSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                document.querySelector('.divConfigSubMainContainerCompo').style.display = 'flex'

                document.querySelector('.geral').classList.remove('perfilActive')
                document.querySelector('.equipe').classList.remove('perfilActive')
                document.querySelector('.torneio').classList.remove('perfilActive')
                document.querySelector('.config').classList.add('perfilActive')
                break
        }
    })

    const [value, setValue] = useState(viewingUser.biografia);

    const callEditMarkdownEditor = async(type) =>{
        if(type === 'enter'){
            document.querySelector('.divmdEditor').style.display = 'block'
            document.querySelector('.divmdViewer').style.display = 'none'
            console.log(value.length)
        }else{
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.divmdViewer').style.display = 'block'

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
                        redes: loggedUser.redes,
                        biografia: value,
                        status: loggedUser.status,
                        corP: loggedUser.corP,
                        corS: loggedUser.corS,
                        favoritados: loggedUser.favoritados,
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
    }

    const makeEverythingWork = () => {

        document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
        document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
        document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'
        if(loggedUser.username === id){
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.enterMarkdown').style.display = 'flex'
            document.querySelector('.config').style.display = 'flex'
        }else{
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.enterMarkdown').style.display = 'none'
            document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'
            document.querySelector('.config').style.display = 'none'
            
        }
        document.querySelector('.geral').classList.add('perfilActive')
        document.querySelector('.UserPlan').textContent = 'Plano ' + viewingUser.status
        setValue(viewingUser.biografia)
        document.querySelector('.divContainerFundoMainContainer').style.backgroundImage = `url(${viewingUser.imgFundo})`
        setTimeout(() => {
        if(stopIt === 0){
            stopIt = 1
            console.log(viewingUser)
 
            }
        }, 4000);
        deadOrAlive = true
    }  
    if(deadOrAlive === false){
        setTimeout(() => {
            makeEverythingWork()
        }, 1600);
    }
    return(
        
        <div className="divUsuarioDMainContainer" style={{borderColor: `${loggedUser.corP} !important`}}>
            {/* <Navbar page={'usuario'}/> */}
            <ModalCustom/>
            <Loading cor={loggedUser.corP}></Loading>
            <div className='divFundoMainContainer' style={{backgroundImage: `url(${viewingUser.imgFundo})`, backgroundSize: 'cover', backgroundPosition: 'center', borderColor: viewingUser.corP}}>
                <div className='divContainerFundoMainContainer'/>
            </div>
            <div className='divUsuarioSubMainContainerD paddingLeft '>
                <div className='divUsuarioComplexContainer' >
                    <div className='divRightMainComplexoContainerCompo' style={{borderColor: viewingUser.corP}} >
                        <div className='divRightUserInfoCompo'  style={{backgroundImage: `url(${viewingUser.imgFundoDois}`, backgroundSize: 'cover', borderColor: viewingUser.corP}}>
                            <div className='imgUserprofileIcon' style={{backgroundImage: `url(${viewingUser.icon})`, borderColor: viewingUser.corP}}></div>
                            <h2>{viewingUser.username}</h2>
                            <h4>Data de Criação: {viewingUser.dataCriacao}</h4>
                            <h1 className='UserPlan'></h1>
                        </div>
                        <div className='divRightSubMainContainerCompo' style={{borderColor: viewingUser.corP}} >
                            <h3>Contatos</h3>
                            <div>
                                <label>Twitter: <a href={`https://twitter.com/${viewingUser.twitter}`}> @{viewingUser.twitter}</a></label>
                                <label>Instagram: <a href={`https://instagram.com/${viewingUser.instagram}`}> @{viewingUser.instagram}</a></label>
                                <label>Discord: <a> {viewingUser.discord}</a></label>
                                <label>Twitch: <a href={`https://twitch.tv/${viewingUser.twitch}`}> /{viewingUser.twitch}</a></label>
                            </div>
                        </div>
                    </div>
                    <div className='divUsuarioSubMainContainerGeneral'  style={{borderColor: viewingUser.corP}}>
                        <div className='perfilNavigation' style={{borderColor: viewingUser.corP}}>
                            <div onClick={() => setPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing'/>Visão Geral</div>
                            <div onClick={() => setPage('equipe')} className='perfilConfig equipe'><div className='imgUsuarioGearEditing'/>Equipes</div>
                            <div onClick={() => setPage('torneio')} className='perfilConfig torneio'><div className='imgUsuarioGearEditing'/>Torneios</div>
                            <div onClick={() => setPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>
                        </div>
                        <div className='divAllContainersUser' style={{borderColor: viewingUser.corP}} >
                            <div className='divUsuarioSubMainContainerCompo'  style={{borderColor: viewingUser.corP}} >
                                <div className='divContainerUsuarioContent' style={{borderColor: viewingUser.corP}} >
                                    <div className='divmdEditor'>
                                        <MDEditor
                                            className='wrapper'
                                            style={{borderColor: viewingUser.corP}} 
                                            visibleDragbar={false}
                                            height={'52.4vh'}
                                            fullscreen={false}
                                            value={value}
                                            onChange={setValue}
                                            preview={'edit'}
                                            
                                        />
                                        <div className='editMarkdownButton exitMarkdown' onClick={() => callEditMarkdownEditor('exit')} style={{borderColor: `${loggedUser.corP}`}}><p>Editar</p></div>
                                    </div>
                                    <div className='divmdViewer'>
                                        <MDEditor.Markdown className='markdownShower'  source={value} style={{ whiteSpace: 'pre-wrap', borderColor: viewingUser.corP}} />
                                        <div className='editMarkdownButton enterMarkdown' onClick={() => callEditMarkdownEditor('enter')} style={{borderColor: `${loggedUser.corP}`}} ><p>Editar</p></div>
                                    </div>
                                </div>
                                <div className='divConquistaEfavoritos'>
                                    <div className='containerFavoriteListOfUser'>
                                        <h2>Jogos Favoritados</h2>
                                        <div className='favoriteListOfUser'>
                                            { jogo.map( (jogo) => {
                                                // for(let i = 0; i < 5;i++){
                                                    // if(jogo.id === viewingUser.personalizacao[i+1]){
                                                        return  <div key={jogo.id} className='divJogosSubContainer' id={jogo.id}>
                                                                    <div className='divJogosContainer'style={{borderColor: viewingUser.corP}}>
                                                                        <img className='divJogosImg' src={jogo.imgFundo}/>
                                                                        <div>
                                                                            <h5>{jogo.nome}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    // }
                                                // }
                                            }) }
                                        </div>
                                    </div>

                                    <div className='containerFavoriteListOfUser'>
                                        <h2>Conquistas</h2>
                                        { torneio.map( (torneio) => 
                                            <div key={torneio.id} className='divJogosSubContainer' id={torneio.id}>
                                                <div className='divJogosContainer' style={{borderColor: viewingUser.corP}}>
                                                    <img className='divJogosImg' src={torneio.thumbnail}/>
                                                    <div>
                                                        <h5>{torneio.nome}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ) }
                                    </div>
                                </div>
                            </div>
                            <div className='divEquipesSubMainContainerCompo' >
                                <div className='divContainerTeamsOnUserTab' style={{borderColor: viewingUser.corP}}>
                                    { 
                      
                                            time.map( (time) => {
                                            
                                                for(let i = 0; i < 5;i++){

                                                    if(JSON.parse(time.equipeAtiva)[i] === loggedUser.id){
                                                        return  <div key={time.id} className='divTeamsOnUserSubContainer' style={{borderColor: viewingUser.corP}} id={time.id}>
                                                                    <div className='divTeamsOnUserContainer'>
                                                                        <img className='divTeamsOnUserImg' src={time.logo}/>
                                                                        <div>
                                                                            <h5>{time.nome}</h5>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                    }
                                                }
                                            }
                                            ) 
                                    
                                    }

                                </div>
                            </div>
                            <div className='divTorneiosSubMainContainerCompo' style={{borderColor: viewingUser.corP}}>
                            </div>
                            <div className='divConfigSubMainContainerCompo' style={{borderColor: viewingUser.corP}}>        
                                <div className='divConfigSubMainContainer'>
                                    <div className='divConfigConfigsContainer' style={{borderColor: viewingUser.corP}}>
                                        <div>
                                            <h1>Configurar Perfil</h1>

                                            <h2>Informações Gerais</h2>
                                            <label>Icone: <img src={loggedUser.icon}></img></label>
                                            <label>Usuário: <input placeholder={loggedUser.username}/></label>
                                        </div>

                                        <div>
                                            <button style={{borderColor: viewingUser.corP}}>Confirmar Mudanças - Informações Gerais</button>
                                        </div>

                                        <div>
                                            <h3>Segurança da Conta</h3>
                                            <label>Email: <input value={loggedUser.email}/></label>
                                            <label>Novo Email: <input placeholder={loggedUser.email}/></label>
                                            <h4>Trocar Senha</h4>
                                            <label>Senha Atual: <input/></label>
                                            <label>Nova Senha: <input/></label>
                                        </div>
                                        <div>
                                            <button style={{borderColor: viewingUser.corP}}>Confirmar Mudanças - Segurança da Conta</button>
                                        </div>
                                        <div>
                                            <h3>Redes Sociais</h3>
                                            <label>Twitter: <input placeholder={loggedUser.twitter}/></label>
                                            <label>Instagram: <input placeholder={loggedUser.instagram}/></label>
                                            <label>Discord: <input placeholder={loggedUser.discord}/></label>
                                            <label>Twitch: <input placeholder={loggedUser.twitch}/></label>
                                        </div>
                                        <div>
                                            <button style={{borderColor: viewingUser.corP}}>Confirmar Mudanças - Redes Sociais</button>
                                        </div>
                                        <div>
                                        <h3>Personalização - Premium</h3>
                                            <label>Cor Principal do perfil e site: <input placeholder={loggedUser.twitter}/></label>
                                            <label>Cor Secundário do perfil: <input placeholder={loggedUser.instagram}/></label>
                                            <label>Imagem atrás do nome - perfil: <input placeholder={loggedUser.discord}/></label>
                                            <label>Imagem atrás da página - perfil: <input placeholder={loggedUser.twitch}/></label>
                                        </div>
                                        <div>
                                            <button style={{borderColor: viewingUser.corP}}>Confirmar Mudanças - Personalização</button>
                                        </div>
                                    </div>

                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default Usuario