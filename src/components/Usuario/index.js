import React, { useEffect, useState } from 'react'
import './index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useParams } from 'react-router-dom';
import MDEditor from '@uiw/react-md-editor';

let oneResponseONLY = 0
let times
function Usuario(){
    const { id } = useParams();
    console.log(id)

    const [loggedUser, setLoggedUser] = useState({}) 
    const [currentTeams, setCurrentTeams] = useState({})
    const [users, setUsers] = useState([])
    const [teams, setTeams] = useState({})
    const [page, setPage] = useState('geral')

    console.log('wfwefiosvzp]kosvvff', teams)
    const getUsers = async () => {
        try{
            const responseTeam = await fetch('http://localhost:3000/api/time')
            const response = await fetch('http://localhost:3000/api/user')
            const data = response.json()
            const dataTeam = responseTeam.json()
            console.log(data)
            if(oneResponseONLY === 0){
                dataTeam.then(
                    (val) => {
                        times = val.data.find((team) => {return team.id === 1 })
                        setTeams(times)
                    }
                    )
                data.then(
                    (val) => {
                        setUsers(val.data)
                        setLoggedUser(val.data.find((account) => {return account.username === id }))
                        document.querySelector('.divEquipesSubMainContainerCompo').style.display = 'none'
                        document.querySelector('.divTorneiosSubMainContainerCompo').style.display = 'none'
                        document.querySelector('.divConfigSubMainContainerCompo').style.display = 'none'
                        document.querySelector('.geral').classList.add('perfilActive')
                        oneResponseONLY = 1
                        
                    }
                        
                )
                
            }
        }catch(error){
          console.log(error)
        }
    }
    getUsers()
    
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
    console.log('editor:', document.getElementsByClassName('public-DraftStyleDefault-block span'))
    const [value, setValue] = React.useState("**Hello world!!!**");
    
    return(
        
        <div className="divUsuarioDMainContainer">
            <Navbar page={'usuario'}/>
            <div className='divFundoMainContainer'>
                <div className='divContainerFundoMainContainer'/>
            </div>
            <div className='divUsuarioSubMainContainer paddingLeft '>
                <div className='divUsuarioComplexContainer'>
                    <div className='divRightMainComplexoContainerCompo'>
                        <div className='divRightUserInfoCompo'>
                            <div className='imgUserprofileIcon' style={{backgroundImage: `url(${loggedUser.icon})`}}></div>
                            <h2>{loggedUser.username}</h2>
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
                        <div>
                            <div className='divUsuarioSubMainContainerCompo' >
                            <MDEditor
                                className='wrapper'
                                height={'52.4vh'}
                                fullscreen={false}
                                value={value}
                                onChange={setValue}
                                preview={'edit'}

                            />
                            {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}

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