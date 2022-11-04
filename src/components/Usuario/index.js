import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

let getUsersTry = 0

let deadOrAlive = false
function Usuario(){
    
    const { id } = useParams();
    
    const [loggedUser, setLoggedUser] = useState({})
    const [viewingUser, setViewingUser] = useState({})

    const [page, setPage] = useState('geral')
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


    
 
    
    if(getUsersTry < 10){
        getUsersTry++
        getUsers()

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

    const [value, setValue] = useState("**Eu ainda não possuo uma biografia!**");

    const callEditMarkdownEditor = (type) =>{
        if(type === 'enter'){
            document.querySelector('.divmdEditor').style.display = 'block'
            document.querySelector('.divmdViewer').style.display = 'none'
        }else{
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.divmdViewer').style.display = 'block'
        }
    }

    const makeEverythingWork = () => {
        document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
        document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
        document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'
        console.log('ViewingUser: ',viewingUser, 'loggedUser: ', loggedUser,'username: ', loggedUser.username, 'id: ', id)
        console.log('If Else:', loggedUser.username !== undefined, loggedUser.username === undefined )
        if(loggedUser.username === id){
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.enterMarkdown').style.display = 'flex'
        }else{
            document.querySelector('.divmdEditor').style.display = 'none'
            document.querySelector('.enterMarkdown').style.display = 'none'
        }
        document.querySelector('.geral').classList.add('perfilActive')
        console.log('loggeduser and viewinguser',loggedUser, viewingUser)
        deadOrAlive = true
    }  
    if(deadOrAlive === false){
        setTimeout(() => {
            
            makeEverythingWork()
        }, 600);
    }
    
    return(
        
        <div className="divUsuarioDMainContainer">
            {/* <Navbar page={'usuario'}/> */}
            <div className='divFundoMainContainer'>
                <div className='divContainerFundoMainContainer'/>
            </div>
            <div className='divUsuarioSubMainContainerD paddingLeft '>
                <div className='divUsuarioComplexContainer'>
                    <div className='divRightMainComplexoContainerCompo'>
                        <div className='divRightUserInfoCompo'>
                            <div className='imgUserprofileIcon' style={{backgroundImage: `url(${viewingUser.icon})`}}></div>
                            <h2>{viewingUser.username}</h2>
                            <h4>Data de Criação: 15/10/2022</h4>
                            <h1 className='UserPlan'>Plano Básico</h1>
                        </div>
                        <div className='divRightSubMainContainerCompo'>
                            <h3>Contatos</h3>
                            <div>
                                <label>Twitter: <a href={`https://twitter.com/${'feef'}`}> @Teste</a><img width={24} src={require('./components/assets/unknown.png')}/></label>
                                <label>Instagram: <a href={`https://instagram.com/${'feef'}`}> @Teste</a><img width={24} src={require('./components/assets/unknown.png')}/></label>
                                <label>Discord: <a> Teste#5353</a><img width={24} src={require('./components/assets/unknown.png')}/></label>
                                <label>Twitch: <a href={`https://twitch.tv/${'feef'}`}> /Teste</a><img width={24} src={require('./components/assets/unknown.png')}/></label>
                            </div>
                        </div>
                    </div>
                    <div className='divUsuarioSubMainContainerGeneral'>
                        <div className='perfilNavigation'>
                            <div onClick={() => setPage('geral')} className='perfilConfig geral'><div className='imgUsuarioGearEditing'/>Visão Geral</div>
                            <div onClick={() => setPage('equipe')} className='perfilConfig equipe'><div className='imgUsuarioGearEditing'/>Equipes</div>
                            <div onClick={() => setPage('torneio')} className='perfilConfig torneio'><div className='imgUsuarioGearEditing'/>Torneios</div>
                            <div onClick={() => setPage('config')} className='perfilConfig config'><div className='imgUsuarioGearEditing'/>Configurar Perfil</div>
                        </div>
                        <div className='divAllContainersUser'>
                            <div className='divUsuarioSubMainContainerCompo' >
                                <div className='divContainerUsuarioContent'>
                                    <div className='divmdEditor'>
                                        <MDEditor
                                            className='wrapper'
                                            visibleDragbar={false}
                                            height={'52.4vh'}
                                            fullscreen={false}
                                            value={value}
                                            onChange={setValue}
                                            preview={'edit'}
                                            
                                        />
                                        <div className='editMarkdownButton exitMarkdown' onClick={() => callEditMarkdownEditor('exit')}><p>Editar</p></div>
                                    </div>
                                    <div className='divmdViewer'>
                                        <MDEditor.Markdown className='markdownShower' source={value} style={{ whiteSpace: 'pre-wrap' }} />
                                        <div className='editMarkdownButton enterMarkdown' onClick={() => callEditMarkdownEditor('enter')}><p>Editar</p></div>
                                    </div>
                                </div>
                                <div className='divConquistaEfavoritos'>
                                    <div>
                                        <h2>Teste</h2>
                                    </div>

                                    <div>
                                        <h2>Teste</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='divEquipesSubMainContainerCompo' >
                            </div>
                            <div className='divTorneiosSubMainContainerCompo' >
                            </div>
                            <div className='divConfigSubMainContainerCompo' >                    
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